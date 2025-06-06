import styles from "./Book.module.css";
import { useEffect, useState } from "react";
import {titleText} from "../../helper.js";
import { useNavigate } from "react-router-dom";

function useBookChapters(title){
    const [chapterList, setchapterList] = useState();

    useEffect(() => {
        if (!title) return;

        fetch(`http://localhost:5000/book?title=${title}`)
        .then(res => res.json())
        .then(data => {
            setchapterList(data);
        })
    }, [title]);

    return chapterList;
}

function readBook(title, chapters){ //need to make this so it can dynamically take in whatever the value of the title is maybe give book attributes?
    console.log("Reading ", title);
    console.log("Chapters: ", chapters)
}

function Book ({title}){
    const [imageURL, setimageURL] = useState("");
    const [chapterList, setchapterList] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const imageLink = `http://localhost:5000/coverImage?title=${title}`;
        fetch(imageLink)
        .then(res => res.blob())
        .then(blob => {
            setimageURL(URL.createObjectURL(blob));
        });

        fetch(`http://localhost:5000/book?title=${title}`)
        .then(res => res.json())
        .then(data => {
            setchapterList(data);
        });
    }, [title]);

    const handleClick = async () => {
        readBook(titleText(title), chapterList);
        navigate(`/books/${title}`);
    };


    return (
        <>
            <div className={styles.Book} onClick={handleClick}>
                <h1 className={styles.Title}>{titleText(title)}</h1>
                <img src={imageURL} className={styles.Image}></img>
            </div>
        </>
    );
}

export default Book;