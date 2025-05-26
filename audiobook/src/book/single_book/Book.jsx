import styles from "./Book.module.css";


function readBook(){ //need to make this so it can dynamically take in whatever the value of the title is maybe give book attributes?
    console.log("Reading The Fellowship of the Ring");
}

function Book ({title}){

    return (
        <>
            <div className={styles.Book} onClick={readBook}>
                <h1 className={styles.Title}>{title}</h1>
                <img src='./images/fellowship_cover.jpg' className={styles.Image}></img>
            </div>
        </>
    );
}

export default Book;