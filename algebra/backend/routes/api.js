const express = require("express");
const User = require("../models/User");
const Set = require("../models/Set");

const router = express.Router();

// Fetch all sets
router.get("/sets", async (req, res) => {
  const sets = await Set.find();
  res.json(sets);
});

// Fetch user data
router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id).populate("completedSets");
  res.json(user);
});

// Update points and completed sets
router.post("/user/:id/complete-set", async (req, res) => {
  const { setId } = req.body;
  const set = await Set.findById(setId);
  const user = await User.findById(req.params.id);

  if (!user.completedSets.includes(setId)) {
    user.points += set.points;
    user.completedSets.push(setId);
    await user.save();
  }
  res.json(user);
});

module.exports = router;
