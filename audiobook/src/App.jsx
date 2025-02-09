import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './navbar/Navbar';
import styles from "./App.module.css";

function Home() {
  return <h1>Home Page</h1>;
}

function Books() {
  return <h1>Books Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>

      <Navbar></Navbar>
      
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />  {/* renders home when url is / */}
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
