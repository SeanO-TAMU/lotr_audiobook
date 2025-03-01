// server/index.js

const express = require('express');
const path = require('path');
const fs = require('fs');
// import mm from 'music-metadata';

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


//need to use streams to load these mp3 so that we can start using them before they are fully loaded
fs.readFile('../the_fellowship_of_the_ring/01_A_Long_Expected_Party.mp3', (err, data) => {
  if (err){
      console.log(err);
  }
  else{
      console.log(data.length);
  }
})