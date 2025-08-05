import styles from "./Audio.module.css";
import {chapText} from "../../../helper.js";

function Audio({ title, chapter, onClose }) {

    let audioString = "http://localhost:5000/chapter?title=" + encodeURIComponent(title) + "&chapter=" + encodeURIComponent(chapter);

    // console.log("Title: ", title);
    // console.log("Chapter: ", chapter);

  return (
    <div className={styles.popupOverlay}  onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.closeIcon} src="/images/closeIcon.png" onClick={onClose}></img>
        <div className={styles.imgDiv}>
          <img src="/images/Balrog.jpg"></img>
        </div>
        
        <p>{chapText(chapter)}</p>
        <audio controls className={styles.audio}>
            <source src={audioString} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default Audio;
