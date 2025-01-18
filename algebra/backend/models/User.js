const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Encrypted or hashed in production
  streak: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  handledTopics: [String], // Array of completed topic names
});

module.exports = mongoose.model('User', userSchema);
