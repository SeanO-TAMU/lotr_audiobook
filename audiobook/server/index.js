// server/index.js

const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
// import mm from 'music-metadata';

const app = express();
const PORT = 5000;

// Serve static files (React app build files)
app.use(express.static(path.join(__dirname, '../dist')));


// http://localhost:5000/api
// Example API endpoint (GET)
app.get('/api', (req, res) => {
  //res.json({ message: 'Hello from Node.js backend!' });
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');
  //res.write('Hello, World!'); // need to change header to text/plain for this to work
  //res.write('<p>Hello, World!</p>');

  console.log("Requested URL:", req.url);

  // routing
  let path = './public/';
  switch(req.url) {
    case '/api':
      path += 'responseDemo.html';
      res.statusCode = 200;
      break;
    // case '/api/about':   ///////////////////// THESE about ones dont work since we are in the app.get(/api) function so only /api routes can be read here in as a req.url
    //   path += 'AboutTest.html';
    //   res.statusCode = 200;
    //   break;
    // case '/api/about-us':  //////////// this is for redirecting routes
    //   res.statusCode = 301;
    //   res.setHeader('Location', '/about');
    //   res.end();
    //   break;
    default:
      path += '404Error.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


  //res.end();

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  let path1 = path.dirname(__dirname);

  console.log("Directory Name: ", __dirname);
  console.log(path1);
});

//need to use streams to load these mp3 so that we can start using them before they are fully loaded
fs.readFile('./library/the_fellowship_of_the_ring/01_A_Long_Expected_Party.mp3', (err, data) => {
  if (err){
      console.log(err);
  }
  else{
      console.log(data.length);
  }
})