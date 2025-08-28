import styles from "./AudiobookPage.module.css";
import { useEffect, useState } from "react";
import {titleText, chapText} from "../../helper.js";
import Audio from "./audio/Audio";

function AudiobookPage({title}){
    const [chapterList, setchapterList] = useState([]);
    const [showPopup, setshowPopup] = useState(false);
    const [popupChapter, setpopupChapter] = useState("");
    const [nextChapter, setNextChapter] = useState("");
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
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

    function handleClick(index){
        setCurrentChapterIndex(index);
        setshowPopup(true);
    };

    function playNextChapter() {
        const nextIndex = currentChapterIndex + 1;
        if (nextIndex < chapterList.length) {
            setCurrentChapterIndex(nextIndex);
        } else {
            setshowPopup(false); // No more chapters, close popup
        }
    }

    const currentChapter = chapterList[currentChapterIndex];
    const hasNextChapter = currentChapterIndex < chapterList.length - 1;

    return (
        <div>
            <h1 className={styles.Title}>{titleText(title)}</h1>
            <div className={styles.ChapterList}>
                {chapterList.map((item, index) => 
                <div key={index} className={styles.Chapter} onClick={() => handleClick(index)}>
                    <p>{chapText(item.chapter)}</p>
                    <div className={styles.imgDiv}></div>
                </div>
                )}
            </div>

            {showPopup && (
                <Audio
                title={title}
                // chapter={popupChapter}
                chapter={currentChapter.chapter}
                nextChapter={nextChapter}
                onClose={() => setshowPopup(false)}
                onAudioEnd={hasNextChapter ? playNextChapter : () => setshowPopup(false)}
                />
            )}
        </div>
    );

}

export default AudiobookPage;