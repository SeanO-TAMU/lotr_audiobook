import styles from "./Book.module.css";

function Book (){

    return (
        <>
            <div className={styles.Title}>
                <h1>The One Audiobook Library to Rule Them All</h1>
                <p>A Journey Through Middle-Earth in Audiobook Form</p>
            </div>
        </>
    );
}

export default Book;