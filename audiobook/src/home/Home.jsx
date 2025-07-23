import styles from "./Home.module.css";
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import {titleText, chapText} from '../helper.js';
import Popup from "../welcome/Popup";

 

function Home (){

    const [quotes, setQuotes] = useState([]);
    const [poems, setPoems] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const today = new Date();
    let quoteDay = (today.getDate() - 1) % 35;
    let poemDay = (today.getDate() - 1) % 21;

    useEffect(() => {

        fetch('http://localhost:5000/poems')
        .then(res => res.json())
        .then(data => {
            setPoems(data);
        })

        fetch('http://localhost:5000/quotes')
        .then(res => res.json())
        .then(data => {
            setQuotes(data);
        })

        const seenPopup = sessionStorage.getItem("seenWelcome");
        if (!seenPopup) {
            setShowPopup(true); 
            sessionStorage.setItem("seenWelcome", "true"); 
        }

    }, []);


    const lines = poems[poemDay]?.poem.split('\n') || [];

    const handleClose = () => {
        setShowPopup(false);
    };


    return (
        <>
            {showPopup && <Popup onClose={handleClose} />}
            <div className={styles.Title}>
                <h1>The One Audiobook Library to Rule Them All</h1>
                <Link to="/books" className={styles.linkNoUnder}><p>A Journey Through Middle-earth in Audiobook Form</p></Link>
            </div>
            <div className={styles.CTADiv}>
                <div className={styles.CTA}>
                    {/* could add a rotating image next to this of each book in the library that can be clicked to take you to that book
                            the call to action can go on the left side */}
                    <h2>Embark on a Journey Through Middle-earth</h2>
                    {/* <hr></hr> */}
                    <p>Dive into the world of J.R.R. Tolkien’s timeless masterpieces, from The Hobbit to The Lord of the Rings and more, all in audiobook form.</p>
                    {/* <Link to="/books">Books</Link> */}
                    <Link to="/books">Start Listening Now</Link>
                </div>
                <div className={styles.Bookimg}>
                    <Link to="/books"><img src="/images/fellowship_cover.jpg"></img></Link>
                </div>
                <div className={styles.Bookinfo}>
                        <p className={styles.bookTitle}><strong>Title:</strong> The Lord of the Rings: The Fellowship of the Ring</p>
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
                        <p>The epic journey to destroy the One Ring, filled with heroes, battles, and the fate of Middle-earth itself.</p>
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
                    {quotes && quotes[quoteDay] ? (
                      <>
                        <p>"{quotes[quoteDay].quote}"</p>
                        <p className={styles.quoteAuthor}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- {quotes[quoteDay].author}</p>
                      </>
                      ) : (
                      <p>Loading quote...</p>
                    )}
                </div>
                <div className={styles.Poem}>
                    <h2>Poem oF The Day</h2>
                    {poems && poems[poemDay] ? (
                      <>
                        {lines.map((line, i) => {
                            if (line == ' s '){
                                return <p className={styles.poemSpace} key={i}>&nbsp;</p>
                            }
                            else{
                                return <p className={styles.poemLine} key={i}>{line}</p>
                            }
                        })}
                        <p className={styles.poemAuthor}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- {poems[poemDay].author}</p>
                      </>
                      ) : (
                      <p className={styles.poemLine}>Loading poem...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;