const mongoose = require("mongoose");

const SetSchema = new mongoose.Schema({
  name: String,
  description: String,
  points: Number,
});

module.exports = mongoose.model("Set", SetSchema);
