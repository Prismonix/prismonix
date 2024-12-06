const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const router = express.Router();
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google OAuth login
router.post('/google-login', async (req, res) => {
  const { tokenId } = req.body;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, given_name: firstName, family_name: lastName } = payload;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'No user found, please sign up first.' });
    }

    // Generate JWT token for authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Google login successful', token });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(400).json({ message: 'Invalid Google token.' });
  }
});

// Google OAuth signup
router.post('/google-signup', async (req, res) => {
  const { tokenId } = req.body;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, given_name: firstName, family_name: lastName } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      // Create new user if not found
      user = await User.create({ email, firstName, lastName, password: '' });
    }

    // Generate JWT token for authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Google Signup successful', token });
  } catch (error) {
    console.error('Google Signup error:', error);
    res.status(400).json({ message: 'Invalid Google token.' });
  }
});

// Traditional login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No user found with this email' });
    }

    // Verify password (you can use bcrypt's compare method for password verification)
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Generate JWT token for authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Signup route
router.post('/signup', async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = await User.create({ email, firstName, lastName, password });

    // Generate JWT token for new user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'Signup successful', token });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Save user role route
router.post('/save-role', async (req, res) => {
  const { role } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update user role
    user.role = role;
    await user.save();

    res.status(200).json({ message: 'Role saved successfully', user });
  } catch (error) {
    console.error('Error saving role:', error);
    res.status(500).json({ message: 'Failed to save role.' });
  }
});

// Save user profile route (for updating profile data such as skills, location, etc.)
router.post('/save-profile', async (req, res) => {
  const { 
    location, definesYou, skills, experience, 
    preferredEmploymentType, preferredWorkEnvironment, innovatorlocation ,innovatoreducation,innovatordefinesYou ,innovatorskills ,innovatorIndustryFocus, innovatorAreaofExpertise, innovatorInnovationCategory, innovatorPrefferedCollaborationType, innovatorurl , innovatorLookingFor,innovatortermsAccepted,
  } = req.body;

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the user profile
    user.location = location || user.location;
    user.definesYou = definesYou || user.definesYou;
    user.skills = skills || user.skills;
    user.experience = experience || user.experience;
    user.preferredEmploymentType = preferredEmploymentType || user.preferredEmploymentType;
    user.preferredWorkEnvironment = preferredWorkEnvironment || user.preferredWorkEnvironment;
    //innovator
    user.innovatorlocation= innovatorlocation || user.innovatorlocation;
    user.innovatoreducation= innovatoreducation || user.innovatoreducation;
    user.innovatordefinesYou= innovatordefinesYou || user.innovatordefinesYou;
    user.innovatorskills= innovatorskills || user.innovatorskills;
    user.innovatorIndustryFocus=innovatorIndustryFocus || user.innovatorIndustryFocus;
    user.innovatorAreaofExpertise=innovatorAreaofExpertise || user.innovatorAreaofExpertise;
    user.innovatorInnovationCategory=innovatorInnovationCategory || user.innovatorInnovationCategory;
    user.innovatorPrefferedCollaborationType=innovatorPrefferedCollaborationType || user.innovatorPrefferedCollaborationType;
    user.innovatorurl=innovatorurl || user.innovatorurl;
    user.innovatorLookingFor=innovatorLookingFor || user.innovatorLookingFor;
    user.innovatortermsAccepted=innovatortermsAccepted || user.innovatortermsAccepted;
    await user.save();

    res.status(200).json({ message: 'Profile saved successfully', user });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ message: 'Failed to save profile.' });
  }
});

// Token validation and user details route
router.get('/me', async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
});

module.exports = router;
