// server/index.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files (React app build files)
app.use(express.static(path.join(__dirname, '../dist')));

// Example API endpoint (GET)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});