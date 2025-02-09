import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";


function Navbar(){ // display map of world during the readings  (could later animate where they are on map?)
     
    return(
        
        <header className={styles.navbarHead}>
            <div className={styles.navLogoDiv}>
                <img className={styles.navLogo} src="/images/lotr_logo.png" alt="logo" />
            </div>
            {/* <h1 className={styles.navTit}>Lord of the Rings Audiobook</h1> */}
          
            <nav className={styles.navbarNav}>
                <ul className={styles.navLinks}>
                    <li><Link to="/">Home</Link></li> {/* updates url to whatever value is specified when clicked / */}
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h2 className={styles.navTit2}>Contact</h2>
        </header>
    )
}

export default Navbar;