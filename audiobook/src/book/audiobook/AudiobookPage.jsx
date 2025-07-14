import styles from "./AudiobookPage.module.css";
import { useEffect, useState } from "react";
import {titleText, chapText} from "../../helper.js";
import Audio from "./audio/Audio";

function AudiobookPage({title}){
    const [chapterList, setchapterList] = useState([]);
    const [showPopup, setshowPopup] = useState(false);
    const [popupChapter, setpopupChapter] = useState("");
    const [theme, setTheme] = useState();

    useEffect(() => {

        fetch(`http://localhost:5000/book?title=${title}`)
        .then(res => res.json())
        .then(data => {
            setchapterList(data);
        });

         fetch(`http://localhost:5000/bookTheme?title=${title}`)
        .then(res => res.json())
        .then(data => {
            setTheme(data.theme);
            document.documentElement.setAttribute("data-theme", data.theme);
        });
    }, [title]);

    function handleClick(chapter){
        setpopupChapter(chapter);
        setshowPopup(true);

    };

    return (
        <div>
            <h1 className={styles.Title}>{titleText(title)}</h1>
            <div className={styles.ChapterList}>
                {chapterList.map((item, index) => 
                <div key={index} className={styles.Chapter} onClick={() => handleClick(item.chapter)}>
                    <p>{chapText(item.chapter)}</p>
                    <div className={styles.imgDiv}></div>
                </div>
                )}
            </div>

            {showPopup && (
                <Audio
                title={title}
                chapter={popupChapter}
                onClose={() => setshowPopup(false)}
                />
            )}
        </div>
    );

}

export default AudiobookPage;