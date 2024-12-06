import React, { useState } from "react";
import axios from "axios";
import "./UploadPost.css"; // Importing CSS for styling

const UploadPost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setMessage("Image size must be less than 5MB.");
      return;
    }
    setImage(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 50 * 1024 * 1024) {
      setMessage("Video size must be less than 50MB.");
      return;
    }
    setVideo(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text && !image && !video) {
      setMessage("Please add text, image, or video.");
      return;
    }

    const formData = new FormData();
    formData.append("text", text);
    if (image) formData.append("image", image);
    if (video) formData.append("video", video);

    try {
      const response = await axios.post("http://localhost:5000/upload/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Post uploaded successfully!");
      console.log(response.data);

      // Reset form state
      setText("");
      setImage(null);
      setVideo(null);
    } catch (err) {
      setMessage("Error uploading post.");
      console.error("Error uploading post:", err);
    }
  };

  return (
    <div className="upload-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write something..."
          />
        </div>

        <div>
          <label>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="preview" />}
        </div>

        <div>
          <label>Upload Video</label>
          <input type="file" accept="video/*" onChange={handleVideoChange} />
          {video && <video src={URL.createObjectURL(video)} controls className="preview" />}
        </div>

        <button type="submit">Submit Post</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UploadPost;
