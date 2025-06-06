import styles from "./AudiobookPage.module.css";
import { useEffect, useState } from "react";
import {titleText, chapText} from "../../helper.js";

function ChapterPopup({ title, chapter, onClose }) {

    let audioString = "http://localhost:5000/chapter?title=" + title + "&chapter=" + chapter;

    // console.log("Title: ", title);
    // console.log("Chapter: ", chapter);

  return (
    <div className={styles.popupOverlay}  onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        
        <p>{chapter}</p>
        <audio controls>
            <source src={audioString} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


function AudiobookPage({title}){
    const [chapterList, setchapterList] = useState([]);
    const [showPopup, setshowPopup] = useState(false);
    const [popupChapter, setpopupChapter] = useState("");

    useEffect(() => {

        fetch(`http://localhost:5000/book?title=${title}`)
        .then(res => res.json())
        .then(data => {
            setchapterList(data);
        })
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
                    <img src="/images/playButton.png"></img>
                </div>
                )}
            </div>

            {showPopup && (
                <ChapterPopup
                title={title}
                chapter={popupChapter}
                onClose={() => setshowPopup(false)}
                />
            )}
        </div>
    );

}

export default AudiobookPage;