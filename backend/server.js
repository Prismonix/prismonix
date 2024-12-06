const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Initialize the app and connect to the database
const app = express();
connectDB();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Allow frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow cookies and credentials
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure express-session for session management (if required)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'defaultSecretKey', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration for Google OAuth (assuming it's configured in config/passport)
require('./config/passport');

// Routes
app.use('/auth', require('./routes/auth')); // Authentication routes
app.use('/upload', require('./routes/upload'));
// Example protected route to demonstrate authentication middleware

// Default route for unmatched paths
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
