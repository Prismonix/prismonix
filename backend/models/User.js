const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Updated user schema with additional profile fields
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ["Investor", "Developer", "Innovator"] }, // User's role
  location: { type: String },
  definesYou: { type: String },
  skills: { type: [String] }, // Skills as an array of strings for better flexibility
  experience: { type: String },  // Experience as a string (e.g., years of experience, or other descriptions)
  preferredEmploymentType: { type: String }, // Employment type preference
  preferredWorkEnvironment: { type: String }, // Work environment preference
  termsAccepted: { type: Boolean, default: false }, // If the user accepted terms of service
  innovatorlocation:{ type: String } ,
  innovatoreducation: { type: String },
  innovatordefinesYou:{ type: String } ,
  innovatorskills:{ type: String } ,
  innovatorIndustryFocus: { type: String },
  innovatorAreaofExpertise: { type: String },
  innovatorInnovationCategory: [{
    value: { type: String },
    label: { type: String }
  }],  
  innovatorPrefferedCollaborationType:{ type: String },
  innovatorurl:{ type: String } ,
  innovatorLookingFor:{ type: String },
  innovatortermsAccepted: { type: Boolean, default: false },
});

// Pre-save hook for hashing passwords
userSchema.pre('save', async function (next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10); // Hash password if modified
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (inputPassword) {
  if (!this.password) return false; // If the password is empty (e.g., for Google OAuth users), always return false
  return bcrypt.compare(inputPassword, this.password); // Compare hashed password
};

// Export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
