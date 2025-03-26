import styles from "./BookPage.module.css";
import Book from "./single_book/Book.jsx";

function BookPage (){

    return (
        <>
            <div className={styles.Title}>
                <h1>The One Audiobook Library to Rule Them All</h1>
                <p>A Journey Through Middle-Earth in Audiobook Form</p>
                <div> <Book></Book></div>
            </div>
        </>
    );
}

export default BookPage;