import styles from "./AudiobookPage.module.css";
import { useEffect, useState } from "react";
import {titleText, chapText} from "../../helper.js";

function AudiobookPage({title}){
    const [chapterList, setchapterList] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/book?title=${title}`)
        .then(res => res.json())
        .then(data => {
            setchapterList(data);
        })
    }, [title]);

    function handleClick(chapter){
        console.log(chapText(chapter));
    };

    return (
        <div>
            <h1 className={styles.Title}>{titleText(title)}</h1>
            <div className={styles.ChapterList}>
                {chapterList.map((item, index) => 
                <div className={styles.Chapter} onClick={() => handleClick(item.chapter)}>
                    <p key={index}>{chapText(item.chapter)}</p>
                    <img src="/images/playButton.png"></img>
                </div>
                )}
            </div>
        </div>
    );

}

export default AudiobookPage;