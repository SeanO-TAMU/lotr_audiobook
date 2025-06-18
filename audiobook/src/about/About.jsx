import styles from "./About.module.css"
import { useNavigate } from 'react-router-dom';

function About(){

    const navigate = useNavigate();

    // function navigateBooks(){
    //     navigate('/books');
    // }

    return(
        <>
            <h1 className={styles.title}>About Us</h1>
            <div className={styles.sky}>
                <img className={styles.cloud1} src="/images/cloud3.png"/>
                <img className={styles.cloud2} src="/images/cloud4.png"/>
                <div className={styles.mission}>
                    <h2>Our Mission</h2>
                    <p>Welcome to our immersive audiobook journey through Middle-earth. Our mission is to bring J.R.R. Tolkien’s timeless works to life through high-quality, accessible audio experiences. Whether you’re a lifelong fan or a first-time adventurer, we invite you to step into a world of hobbits, heroes, and high adventure.</p>    
                </div>
                <div className={styles.offer}> 
                    <h2>What We Offer</h2>
                    <p>We provide a carefully curated collection of Lord of the Rings audiobook recordings, enhanced with:</p>
                    <ul>
                        <li>Professional narration</li>
                        <li>Thematic background music</li>
                        <li>Chapter navigation</li>
                        <li>High-fidelity audio</li>
                    </ul>
                    <p>We aim to preserve Tolkien’s vision while making it easier to experience his work anywhere, anytime.</p>
                </div>
            </div>
            <div className={styles.hobbit}>
                <div className={styles.mound}>
                    <div className={styles.exist}>
                        <h2>Why This Project Exists</h2>
                        <p>This project was born out of a passion for Tolkien’s legendarium and a desire to create an audiobook experience that honors the depth, beauty, and detail of his world. As fans ourselves, we noticed a lack of accessible, well-organized, and legally available audio content that captured the epic scale of The Lord of the Rings.</p>
                    </div>
                    <div className={styles.made}>
                        <h2>How It's Made</h2>
                        <p>Each audiobook chapter is:</p>
                        <ul>
                            <li> Narrated by voice actors</li>
                            <li> Enhanced with music inspired by Middle-earth</li>
                            <li> Edited for clarity and pacing</li>
                            <li> Designed to align closely with the tone and language of Tolkien’s original text</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mound}></div>
                <div className={styles.mound}></div>
                <div className={styles.moundBase}></div>
                <div className={styles.moundBase}></div>
                <img className={styles.img1} src="/images/grassBorder.png"></img>
                <img className={styles.img2} src="/images/grassBorder.png"></img>
                <div className={styles.door} onClick={() => {navigate('/books')}}></div>
                <div className={styles.window}></div>
            </div>
            <div className={styles.ground}>
                <div className={styles.team}>
                    <h2>Our Team</h2>
                    <ul>
                        <li>Narration Director and Audio Engineer: <a href='https://phildragash.com/index.html'>Phil Dragesh</a> – Trained voice actor specializing in immersive sound design</li>
                        <li>Composer: <a href='https://howardshore.com/'>Howard Shore</a> – Crafted original musical themes inspired by the cultures, landscapes, and legends of Middle-earth</li>
                        <li>Web Developer: Sean O'Connor – Created this platform to share Tolkien’s world</li>
                    </ul>
                </div>
                <div className={styles.legal}>
                    <h2>Legal and Fair Use</h2>
                    <p>We do not sell or profit from Tolkien’s works. This site is intended for educational and fan purposes only. We encourage all visitors to support the official publishers and rights holders. Where possible, we provide links to purchase official audiobooks.</p>
                </div>
            </div>
        </>
    );
}

export default About;