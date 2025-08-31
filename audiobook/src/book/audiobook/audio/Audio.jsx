import styles from "./Audio.module.css";
import {chapText} from "../../../helper.js";
import {useState, useEffect} from "react";
import NextChapter from "./nextChapter/NextChapter.jsx";

function Audio({ title, chapter, onClose, onAudioEnd}) {

    const [images, setImages] = useState([]);
    const [times, setTimes] = useState([]);
    const [imageNum, setImageNum] = useState(0);
    const [folderNum, setFolderNum] = useState(0);
    const [imageModulus, setImageModulus] = useState(0);
    const [folderModulus, setFolderModulus] = useState(0);
    const [showPopup, setShowPopup] = useState(false); // variable to control the next chapter timer popup

    let audioString = "http://localhost:5000/chapter?title=" + encodeURIComponent(title) + "&chapter=" + encodeURIComponent(chapter);

   useEffect(() => {
        fetch(`http://localhost:5000/chapterImages?title=${encodeURIComponent(title)}&chapter=${encodeURIComponent(chapter)}`)
        .then(res => res.json())
        .then(data => {
            setImages(data);
            console.log("Fetched images: ", data);

        })
        fetch(`http://localhost:5000/chapterTime?title=${encodeURIComponent(title)}&chapter=${encodeURIComponent(chapter)}`)
          .then(res => res.json())
          .then(data => {
            setTimes(data);
            console.log("Fetched times, ", data);
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

    useEffect(() => {
      const audio = document.getElementById("chapAudio");

      if (!audio) return;

      audio.load();

      function handleEnd() {
          console.log("Audio file has ended");
          setShowPopup(true);
      }

      audio.addEventListener("ended", handleEnd);

      audio.play().catch(console.error);

      return () => {
        audio.removeEventListener("ended", handleEnd);
      };

    }, [chapter]); //ig don't need onAudioEnd as dependency here since it is not used in this useEffect

    useEffect(() => {
      if(times.length === 0){
        return;
      }
      const audio = document.getElementById("chapAudio");

      if (!audio) return;

      function timeUpdate(){
        let time = audio.currentTime;
        let newFolder = 0;
        console.log("Current Time: ", time);
        console.log("Time lists: ", times);

        for(let i = 0; i < times.length; i++){
          if(time >= times[i]){
            newFolder = i + 1;//sets folderNum for scenes that fall in between stuff
          }
        }

        if(newFolder != folderNum){
          setFolderNum(newFolder);
        }
      }

      audio.addEventListener("timeupdate", timeUpdate);

      return () => {
        audio.removeEventListener("timeupdate", timeUpdate);
      };

    }, [times, folderNum]);


  return (
    <div className={styles.popupOverlay}  onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <img className={styles.closeIcon} src="/images/closeIcon.png" onClick={onClose}></img>
        <div className={styles.imgDiv}>
          {imageModulus === 0 && <img src="/images/lotr_logo.png"></img>}
          {imageModulus > 0 && images[folderNum] && (
            <img id="chapterImage"  
            key={`${folderNum}-${imageNum}`} 
            className={imageModulus > 1 ? styles.chapImage: ""}
            src={`${imageString}${images[folderNum][imageNum]}`} /> //only apply chapImage style if number of images in file is greater than
          )}
        </div>
        
        <p>{chapText(chapter)}</p>
        <audio id="chapAudio" controls className={styles.audio}>
            <source src={audioString} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        {showPopup && ( // how would I get this to close when onAudioEnd runs?
          <NextChapter onAudioEnding={() => {setShowPopup(false); onAudioEnd();}} onClosePopup={() => setShowPopup(false)}></NextChapter>
        )}
      </div>
    </div>
  );
}

export default Audio;
