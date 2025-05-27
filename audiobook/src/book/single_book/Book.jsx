import styles from "./Book.module.css";
import { useEffect, useState } from "react";


function readBook(title){ //need to make this so it can dynamically take in whatever the value of the title is maybe give book attributes?
    console.log("Reading ", title);
}

function Book ({title}){

    const [imageURL, setimageURL] = useState("");

    useEffect(() => {
        const imageLink = `http://localhost:5000/coverImage?title=${title}`;
        fetch(imageLink)
        .then(res => res.blob())
        .then(blob => {
            setimageURL(URL.createObjectURL(blob));
        });
    }, [title]);

    const handleClick = () => {
        readBook(title);
    };


    return (
        <>
            <div className={styles.Book} onClick={handleClick}>
                <h1 className={styles.Title}>{title}</h1>
                <img src={imageURL} className={styles.Image}></img>
            </div>
        </>
    );
}

export default Book;