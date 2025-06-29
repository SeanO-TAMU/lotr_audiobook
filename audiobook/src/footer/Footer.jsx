import styles from "./Footer.module.css";


function Footer(){
    // Mea govannen! = well met in Sindarin
    // Aurë entuluva! (Q. ˈDay shall come againˈ)
    return(
        <footer className={styles.footer}>
            <div className={styles.footSectioning}>
                    <div className={styles.top}>
                        <p>&copy; 2025 Sean O'Connor. This is a fan site. All Tolkien-related characters and content belong to their respective copyright holders.</p>
                        <p>Mea govannen!</p>
                    </div>
                <div className={styles.footSection}>
                    <div className={styles.Symbol}>
                        <img src="/images/Sauron2.png" alt="Sauron Symbol" />
                        <p>Speak friend and listen</p>
                        <p>Made in the Shire</p>
                    </div>
                    <div className={styles.Contact}>
                        <h2>Contact</h2>
                        <a href="https://github.com/SeanO-TAMU">GitHub</a>
                        <a href="https://www.linkedin.com/in/sean-o%E2%80%99connor-31320a256">LinkedIn</a>
                        <a href="mailto:soc1641@icloud.com">soc1641@icloud.com</a>
                        <a href="https://urldefense.com/v3/__https://www.instagram.com/sean_oconnor723?igsh=MXUwenZzcmZzZnE5YQ*3D*3D&utm_source=qr__;JSU!!KwNVnqRv!HQryBiXNbr98edGcWLkk3T00z3o8rSm3ey3X1nQpILYNSNszI5spyiiYRV1tl10vcrabDQ0laNHd_4ehV1bE$">Instagram</a>
                    </div>
                    <div className={styles.Navigation}>
                        <h2>Navigate</h2>
                        
                        <a href="/">Home</a> 
                        <a href="/about">About</a> 
                        <a href="/books">Books</a> 
                        <a href='/credits'>Credits</a>
                        
                    </div>
                    <div className={styles.Extra}>
                        <h2>Extra Links</h2>
                        <a href = "https://www.tolkienestate.com/">The Tolkien Estate</a>
                        <a href = "https://howardshore.com/">Howard Shore</a>
                        <a href = "https://phildragash.com/index.html">Phil Dragash</a>
                        <a href = "https://tolkiengateway.net/wiki/Main_Page">Tolkien Gateway</a>
                        <a href = "https://www.theonering.net/">TheOneRing.net</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;