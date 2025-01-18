const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import User model
const Topic = require('./models/Topic'); // Import Topic model (if needed)

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/learningPlatform', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Example protected route (already defined earlier)
app.get('/protected', async (req, res) => {
  // Implementation for authentication (if required)
});

// Update progress route
app.post('/update-progress', async (req, res) => {
  const { email, streak, points, topic } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');
    
    // Update streak and points
    if (streak) user.streak = streak;
    if (points) user.points += points;
    if (topic && !user.handledTopics.includes(topic)) {
      user.handledTopics.push(topic);
    }
    
    await user.save();
    res.send('Progress updated');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Add more routes as needed
// For example, topic-related routes
app.get('/topics', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
