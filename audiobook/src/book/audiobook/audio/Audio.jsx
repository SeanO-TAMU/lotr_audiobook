import styles from "./Audio.module.css";
import {chapText} from "../../../helper.js";
import {useState, useEffect} from "react";

function Audio({ title, chapter, onClose }) {

    const [images, setImages] = useState([]);
    const [imageNum, setImageNum] = useState(0);
    const [folderNum, setFolderNum] = useState(0);
    const [imageModulus, setImageModulus] = useState(0);
    const [folderModulus, setFolderModulus] = useState(0);

    let audioString = "http://localhost:5000/chapter?title=" + encodeURIComponent(title) + "&chapter=" + encodeURIComponent(chapter);

   useEffect(() => {
        fetch(`http://localhost:5000/chapterImages?title=${encodeURIComponent(title)}&chapter=${encodeURIComponent(chapter)}`)
        .then(res => res.json())
        .then(data => {
            setImages(data);
            console.log("Fetched images: ", data);

        })
    }, [title, chapter]);

    useEffect(() => {

      setFolderModulus(images.length);

    }, [images]);

    useEffect(() => {

      setImageNum(0);

    }, [images, folderNum]);

    useEffect(() => {
      
      if (images.length > 0 && images[folderNum]) {
        setImageModulus(images[folderNum].length);
      }

    }, [folderNum, images]);

    let imageString = `/library/${title}/chapters/${chapter}/images/`;

    useEffect(() => {
      if (images.length > 0 && images[folderNum]?.length > 0) {
        const intervalId = setInterval(() => {
          setImageNum(prev => (prev + 1) % imageModulus); // replace this with a function that calls the fade and then switch?
        }, 10000);

        return () => clearInterval(intervalId); // Cleanup on unmount or dependency change
      }
    }, [imageModulus, folderNum, images]);

  return (
    <div className={styles.popupOverlay}  onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.closeIcon} src="/images/closeIcon.png" onClick={onClose}></img>
        <div className={styles.imgDiv}>
          {images.length === 0 && <img src="/images/lotr_logo.png"></img>}
          {images.length > 0 && images[folderNum] && (
            <img id="chapterImage" className={styles.chapImage} src={`${imageString}${images[folderNum][imageNum]}`} />
          )}
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
