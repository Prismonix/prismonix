const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
});

// Pre-save hook for hashing passwords
userSchema.pre('save', async function (next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (inputPassword) {
  if (!this.password) return false; // If the password is empty (e.g., for Google OAuth users), always return false
  return bcrypt.compare(inputPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
