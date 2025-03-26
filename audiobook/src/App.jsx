import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './home/Home'
import Navbar from './navbar/Navbar';
import BookPage from './book/BookPage';
import styles from "./App.module.css";
import Footer from "./footer/Footer";

function Homepage() {
  return (
          <div className={styles.wrapper}>
            <Home></Home>
          </div>
      );

}

function Bookspage() {
  return (
    <div className={styles.wrapper}>
      <h1>Book Page</h1>
      <BookPage></BookPage>
    </div>
  );
}

function Aboutpage() {
  return (
    <div className={styles.wrapper}>
      <h1>About Page</h1>
    </div>
  );
}

function Contactpage() {
  return (
    <div className={styles.wrapper}>
      <h1>Contact Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>

      <Navbar></Navbar>
      
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* renders home when url is / */}
          <Route path="/books" element={<Bookspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>

        {/* <footer className={styles.footer}>
            <p>Footer</p>
        </footer> */}

        <Footer></Footer>

    </Router>
  );
}

export default App;
