import styles from "./Audio.module.css";
import {chapText} from "../../../helper.js";
import {useState, useEffect} from "react";

function Audio({ title, chapter, onClose }) {

    const [images, setImages] = useState([]);

    let audioString = "http://localhost:5000/chapter?title=" + encodeURIComponent(title) + "&chapter=" + encodeURIComponent(chapter);

   useEffect(() => {
        fetch(`http://localhost:5000/chapterImages?title=${encodeURIComponent(title)}&chapter=${encodeURIComponent(chapter)}`)
        .then(res => res.json())
        .then(data => {
            setImages(data);
            console.log("Fetched images: ", data);

        })
    }, [title, chapter]);

    let imageString = `/library/${title}/chapters/${chapter}/images/`;

    

  return (
    <div className={styles.popupOverlay}  onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.closeIcon} src="/images/closeIcon.png" onClick={onClose}></img>
        <div className={styles.imgDiv}>
          {images.length === 0 && <img src="/images/lotr_logo.png"></img>}
          {!(images.length === 0) && <img src={`${imageString}${images[0][0]}`}></img>}
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
