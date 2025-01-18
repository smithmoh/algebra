const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();

app.use(cors());
app.use(express.json());

// Firebase Admin SDK setup
const serviceAccount = require('./firebase-service-account-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Backend!');
  });

// Example protected route
app.get('/protected', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      res.send(`Hello, ${decodedToken.email}`);
    } catch (error) {
      res.status(401).send('Invalid token');
    }
  });

// start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
