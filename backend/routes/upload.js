const express = require('express');
const multer = require('multer');
const { MongoClient, GridFSBucket } = require('mongodb');
const router = express.Router();

const mongoURI = process.env.MONGO_URI;
let bucket;

// Connect to MongoDB and initialize GridFSBucket
const connectToMongo = async () => {
  try {
    const client = await MongoClient.connect(mongoURI);
    const db = client.db('prismonix'); // Your MongoDB database name
    bucket = new GridFSBucket(db, { bucketName: 'uploads' }); // Initialize GridFSBucket for 'uploads' collection
    console.log("MongoDB connected and GridFS bucket initialized.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

// Set up Multer memory storage
const storage = multer.memoryStorage();
const uploadFields = multer({ storage: storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 },
]);

// Route to upload a post (image, video, and text)
router.post('/upload', uploadFields, async (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files uploaded');
  }

  if (!bucket) {
    return res.status(500).send('MongoDB connection not established.');
  }

  const image = req.files.image ? req.files.image[0] : null;
  const video = req.files.video ? req.files.video[0] : null;

  const fileUploads = [];

  if (image) {
    const uploadStreamImage = bucket.openUploadStream(image.originalname, {
      contentType: image.mimetype,
    });
    uploadStreamImage.end(image.buffer);
    fileUploads.push(uploadStreamImage);
  }

  if (video) {
    const uploadStreamVideo = bucket.openUploadStream(video.originalname, {
      contentType: video.mimetype,
    });
    uploadStreamVideo.end(video.buffer);
    fileUploads.push(uploadStreamVideo);
  }

  try {
    await Promise.all(fileUploads);
    res.status(200).json({ message: 'Files uploaded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading files', error: err });
  }
});

// Route to get uploaded files with pagination
router.get('/feed', async (req, res) => {
  if (!bucket) {
    return res.status(500).send('MongoDB connection not established.');
  }

  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  try {
    // Find the files in the 'uploads.files' collection (metadata)
    const files = await bucket.find()
      .skip((page - 1) * limit) // Pagination
      .limit(limit) // Limit to the number of items per page
      .toArray();

    // If there are no files, set hasMore to false
    const hasMore = files.length === limit;

    // Map file metadata to return only necessary information
    const fileDetails = files.map(file => ({
      filename: file.filename,
      contentType: file.contentType,
      uploadDate: file.uploadDate,
      fileId: file._id,
    }));

    // Send response with fileDetails and hasMore
    res.status(200).json({ fileDetails, hasMore });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching files', error: err });
  }
});

// Route to serve files from GridFS by filename
router.get('/uploads/:filename', (req, res) => {
  if (!bucket) {
    return res.status(500).send('MongoDB connection not established.');
  }

  const { filename } = req.params;

  // Find the file metadata by filename
  bucket.find({ filename }).toArray((err, files) => {
    if (err) {
      return res.status(500).send('Error finding file');
    }
    if (!files || files.length === 0) {
      return res.status(404).send('File not found');
    }

    // Open a stream to the file and pipe it to the response
    const file = files[0];
    const downloadStream = bucket.openDownloadStream(file._id);
    res.set('Content-Type', file.contentType); // Set the content type
    downloadStream.pipe(res); // Stream the file to the client
  });
});

// Initialize MongoDB connection
connectToMongo().catch(err => {
  console.error("MongoDB connection failed: ", err);
});

module.exports = router;
