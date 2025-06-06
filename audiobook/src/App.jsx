import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './home/Home'
import Navbar from './navbar/Navbar';
import BookPage from './book/BookPage';
import AudiobookPage from './book/audiobook/AudiobookPage';
import styles from "./App.module.css";
import Footer from "./footer/Footer";
import { useParams } from "react-router-dom";

function Homepage() {
  return (
      <div className={styles.pageBackground}>
          <div className={styles.wrapper}>
            <Home></Home>
          </div>
      </div>
      );

}

function Bookspage() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>
        <BookPage></BookPage>
      </div>
    </div>

  );
}

function Aboutpage() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>
        <h1>About Page</h1>
      </div>
    </div>

  );
}

function Contactpage() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>
        <h1>Contact Page</h1>
      </div>
    </div>
  );
}

function Accreditationpage() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>
        <h1>Accreditation Page</h1>
        <p>Accreditations: Credit artists as well as phil dragesh and also howard shore if music is used. Artists such as karl fitzgerald and matt ferguson as well as others -- use reverse image search -- .</p>
      </div>
    </div>
  );
}

function Audiobookpage() {

   const { title } = useParams();

  return(
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>     
        <AudiobookPage title={title}></AudiobookPage>
      </div>
    </div>
  )
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
          <Route path="/accreditations" element={<Accreditationpage />} />
          <Route path="/books/:title" element={<Audiobookpage />}></Route>
        </Routes>

        {/* <footer className={styles.footer}>
            <p>Footer</p>
        </footer> */}

        <Footer></Footer>

    </Router>
  );
}

export default App;
