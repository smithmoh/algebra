const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  points: { type: Number, default: 0 },
  completedSets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Set" }],
});

module.exports = mongoose.model("User", UserSchema);
