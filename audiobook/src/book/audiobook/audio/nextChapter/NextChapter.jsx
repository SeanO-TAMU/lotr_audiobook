import styles from "./NextChapter.module.css";
import {useState, useEffect} from "react";


function NextChapter({onAudioEnding, onClosePopup}){
    const [countdown, setCountdown] = useState(5);

    useEffect(() => { // This calls the next chapter function once countdown === 0

        const intervalId = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    // onAudioEnding();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);

    }, [])

    return(
        <div className={styles.popupOverlay}>
            <div className={styles.popup}>
                Playing next chapter in {countdown} seconds
                <div className={styles.cancel} onClick={onClosePopup}>
                    Cancel
                </div>
            </div>
        </div>
    );
}

export default NextChapter;