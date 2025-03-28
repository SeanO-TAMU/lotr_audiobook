import styles from "./Footer.module.css";


function Footer(){

    return(
        <footer className={styles.footer}>
            <p>Footer</p>
            <p>&copy; 2025 Sean O'Connor. Some rights reserved (Shoutout Phil Dragesh).</p>
            <p>Contact: <a href="mailto:soc1641@icloud.com">soc1641@icloud.com</a></p>
            <a href="https://github.com/yourprofile">GitHub</a>
            <nav>
                <a href="/">Home</a> | 
                <a href="/about">About</a> | 
                <a href="/books">Books</a> | 
                <a href="/contact">Contact</a>
            </nav>
        </footer>
    );
}

export default Footer;