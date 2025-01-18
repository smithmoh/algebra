const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  questions: [{ type: String }], // Array of questions for the topic
});

module.exports = mongoose.model('Topic', topicSchema);
