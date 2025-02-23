import styles from "./Home.module.css";
import {Link} from "react-router-dom";

function Home (){
    return (
        <>
            <div className={styles.Title}>
                <h1>The One Audiobook Library to Rule Them All</h1>
                <p>A Journey Through Middle-Earth in Audiobook Form</p>
                </div>
            <div className={styles.CTA}>
                {/* could add a rotating image next to this of each book in the library that can be clicked to take you to that book
                          the call to action can go on the left side */}
                <h2>Embark on a Journey through Middle-earth</h2>
                <p>Dive into the world of J.R.R. Tolkien’s timeless masterpieces, from The Hobbit to The Lord of the Rings and more, all in audiobook form</p>
                {/* <Link to="/books">Books</Link> */}
                <Link to="/books">Start Listening Now</Link>
            </div>
        </>
    );
}

export default Home;