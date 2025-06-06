// server/index.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const http = require('http');
// import mm from 'music-metadata';

async function retrieveBooks(){
  let library = [];
  let filePath = path.join(path.dirname(__dirname), '/library'); //path to the library

  const files = await fs.promises.readdir(filePath);
  for(let i = 0; i < files.length; i++){
    library.push(files[i]);
    //console.log("Book: ", files[i]);
  }

  return library;
}

async function retrieveChapters(book){
  let chapters = [];
  let filePath = path.join(path.dirname(__dirname), '/library'); //path to the library  
  filePath = path.join(filePath, book); //path to the book

  const files = await fs.promises.readdir(filePath);
  for(let i = 0; i < files.length; i++){
    let filename = path.join(filePath, files[i]);
    let fileLoc = await fs.promises.stat(filename);

    if(!fileLoc.isDirectory()){ // if it is a directory don't add
      chapters.push(files[i]);
      //console.log("Chapter: ", files[i]);
    }
    else {
      continue;
    }

  }

  return chapters;
}

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Serve static files (React app build files)
app.use(express.static(path.join(__dirname, '../dist')));

//prints the req object info
app.use((req, res, next) => {
  console.log("New request made: ");
  console.log("Host: ", req.hostname);
  console.log("Path: ", req.path);
  console.log("URL: ", req.url);
  console.log("Method: ", req.method);
  next();
});

async function readingDirec(filePath, indent){
  const stats = await fs.promises.stat(filePath);
  if(stats.isDirectory()){
    console.log(indent + "Directory: ", filePath);
    let filename;
    const files = await fs.promises.readdir(filePath);
    for(let i = 0; i < files.length; i++){
      filename = path.join(filePath, files[i]);
      const fileStats = await fs.promises.stat(filename);
      if(fileStats.isDirectory()){
        let indent2 =  indent + "  ";
        await readingDirec(filename, indent2);
      }
      else{
        console.log(indent + "Filename: ", filename);
      }
    }
  }
  else{
    return;
  } 
}

//this use prints all books and the chapters to those books
app.use(async (req, res, next) => {
  let path1 = path.dirname(__dirname);
  let path2 = path.join(path1, '/library');
  console.log("Library path: ", path2);
  console.log("Path1: ", path1);

  const stats = fs.promises.stat(path2)
    .then(stats => {
    console.log(stats.isDirectory());
    })
    .catch(err => {
      console.error('Error:', err);
    });

  //console.log("Reading Directory Function");
  //await readingDirec(path2, "");

  let library = await retrieveBooks();
  console.log(library);

  for(let i = 0; i < library.length; i++){
    let chapters = await retrieveChapters(library[i])
    console.log(chapters);
  }
  next();
});

// http://localhost:5000/api
// Example API endpoint (GET)
app.get('/', (req, res) => {
  //res.json({ message: 'Hello from Node.js backend!' });
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');
  //res.write('Hello, World!'); // need to change header to text/plain for this to work
  res.write('<p>Hello, World!</p>');

  res.end();

});

//handle request to get all book titles in the library
app.get('/library', async (req, res) => {
  let books = await retrieveBooks();
  let library = [];
  for (let i = 0; i < books.length; i++){
    library.push({
      title: books[i]
      });
  }

  res.json(library);
});

//handle requests to get all chapter names in a book
app.get('/book', async (req, res) => {
  // need query parameters for the retrieve chapters function

  const title = req.query.title;
  let chapterList = await retrieveChapters(title);

  let chapters = [];
  for(let i = 0; i < chapterList.length; i++){
    chapters.push({
      chapter: chapterList[i]
    });
  }

  res.json(chapters);
});

//handle requests to get the chapter mp3 file
app.get("/chapter", (req, res) => {
  //need query paramters to retrieve the chapter mp3/selet the right one
  const book = req.query.title;
  const chapter = req.query.chapter;

  const filePath = path.join(path.dirname(__dirname), '/library', book, chapter);

  const CHUNKSIZE = 500 * 1e3;

  // send audio in chunks
  const range = req.headers.range || "0";
  const audioSize = fs.statSync(filePath).size; //audio size

  // define start and end of current chunk
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNKSIZE, audioSize - 1);
  const contentLength = end - start + 1;

  // set headers for transfer to client
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${audioSize}`,
    "Accept-Ranges" : "bytes",
    "Content-Length" : contentLength,
    "Content-Type" : "audio/mpeg",
    "Transfer-Encoding" : "chunked",
  };

  // write headers to response object
  res.writeHead(206, headers);

  const readStream = fs.createReadStream(filePath, { start, end });
  readStream.pipe(res); // pipe readStream into the response
   
});

app.get("/coverImage", async (req, res) => {
  const title = req.query.title;

  let filePath = path.join(path.dirname(__dirname), 'library', title, 'book_cover');

   const Image = await fs.promises.readdir(filePath); //gets image file

   const imagePath = path.join(filePath, Image[0]); //gets full image path

   res.sendFile(imagePath, { headers: { 'Content-Type': 'image/jpeg' } });

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