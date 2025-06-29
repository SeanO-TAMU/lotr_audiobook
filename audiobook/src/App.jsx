import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useParams} from "react-router-dom";
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import BookPage from './book/BookPage';
import AudiobookPage from './book/audiobook/AudiobookPage';
import TestPage from './test/Test';
import AboutPage from './about/About';
import styles from "./App.module.css";
import Footer from "./footer/Footer";
import Credit from "./credits/Credit";
import './themes.css';
import './fonts.css';

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
          <AboutPage></AboutPage>
      </div>
    </div>

  );
}

function Contactpage() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>
        <h1>Contact Page</h1>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

function Creditpage() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>
        <Credit></Credit>
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

function Testpage(){
  return(
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>     
        <TestPage></TestPage>
      </div>
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    // Simple routing logic
    let theme = "lava"; // default

    if (pathname.startsWith("/books") && !pathname.startsWith("/books/")) {
      theme = "castle";
    }
    else if (pathname.startsWith("/books/")){ //lets book component set theme if you are in a book
      return;
    }
    else if (pathname.startsWith("/about")){
      theme = 'nightsky';
  }
    else if (pathname.startsWith("/test")){
      theme = 'navy';
    }
    else if (pathname.startsWith("/credit")){
      theme = 'stars'
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, [location]);

  return (
    <>

      <Navbar></Navbar>
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/books" element={<Bookspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/credits" element={<Creditpage />} />
          <Route path="/books/:title" element={<Audiobookpage />}></Route>
          <Route path="/test" element={<Testpage />} />
        </Routes>

        <Footer></Footer>

    </>
  );
}

function App(){
  return(
    <Router>
      <AppWrapper></AppWrapper>
    </Router>
  );
}

export default App;
