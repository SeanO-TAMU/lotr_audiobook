import styles from "./Home.module.css";
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import {titleText, chapText} from '../helper.js';



function Home (){

    useEffect(() => {
        
        console.log(titleText('the_fellowship_of_the_ring'));

        console.log(chapText('01_A_Long_Expected_Party.mp3'));

      }, []);


    return (
        <>
            <div className={styles.Title}>
                <h1>The One Audiobook Library to Rule Them All</h1>
                <Link to="/books"><p>A Journey Through Middle-Earth in Audiobook Form</p></Link>
            </div>
            <div className={styles.CTADiv}>
                <div className={styles.CTA}>
                    {/* could add a rotating image next to this of each book in the library that can be clicked to take you to that book
                            the call to action can go on the left side */}
                    <h2>Embark on a Journey Through Middle-Earth</h2>
                    <hr></hr>
                    <p>Dive into the world of J.R.R. Tolkien’s timeless masterpieces, from The Hobbit to The Lord of the Rings and more, all in audiobook form.</p>
                    {/* <Link to="/books">Books</Link> */}
                    <Link to="/books">Start Listening Now</Link>
                </div>
                <div className={styles.Bookimg}>
                    <Link to="/books"><img src="/images/fellowship_cover.jpg"></img></Link>
                </div>
                <div className={styles.Bookinfo}>
                        <p className={styles.bookTitle}><strong>Title:</strong> The Lord of the Rings The Fellowship of the Ring</p>
                        <p className={styles.bookAuthor}><strong>Author:</strong> J.R.R Tolkien</p>
                        <p className={styles.bookNarrate}><strong>Narrated by:</strong> Phil Dragash</p>
                        <p className={styles.bookDate}><strong>Release Date:</strong> 1954</p>
                        <p className={styles.bookGenre}><strong>Genre: </strong> Fantasy</p>
                </div>
            </div>
            <div className={styles.Explore}>
                <h2>Explore by Series</h2>
                <div className={styles.ExploreBy}>
                <Link to="/books" className={styles.NoLinkStyle1}><div className={styles.Book1}>
                        <h3>The Hobbit</h3>
                        <p>Tolkien’s classic tale of adventure, perfect for listeners of all ages. Begin with The Hobbit and explore the events that lead to The Lord of the Rings.</p>
                    </div></Link>
                    <Link to="/books" className={styles.NoLinkStyle2}><div className={styles.Book2}>
                        <h3>The Lord of the Rings Trilogy</h3>
                        <p>The epic journey to destroy the One Ring, filled with heroes, battles, and the fate of Middle-Earth itself.</p>
                    </div></Link>
                    <Link to="/books" className={styles.NoLinkStyle3}><div className={styles.Book3}>
                        <h3>The Silmarillion</h3>
                        <p>Explore the deep history of Middle-earth, from the creation of the world to the ancient tales of elves and men.</p>
                    </div></Link>
                </div>
            </div>
            <div className={styles.OfTheDay}> 
                <div className={styles.Quote}>
                    <h2>Quote oF The Day</h2>
                    <p>"There is some good in this world, and its worth fighting for."</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- J.R.R. Tolkien</p>
                </div>
                <div className={styles.Poem}>
                    <h2>Poem oF The Day</h2>
                    <p>All that is gold does not glitter, <br /> Not all those who wander are lost; <br /> The old that is strong does not wither, <br /> Deep roots are not reached by the frost. <br /> From the ashes a fire shall be woken, <br /> A light from the shadows shall spring; <br /> Renewed shall be blade that was broken, <br /> The crownless again shall be king.</p>
                </div>
            </div>
        </>
    );
}

export default Home;