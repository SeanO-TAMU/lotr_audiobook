import styles from "./Popup.module.css";

export default function WelcomePopup({ onClose }) {
  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <h2>Mea govannen!</h2>
        <p>Embark on your audiobook adventure through Tolkien's world.</p>
        <button onClick={onClose}>Enter</button>
      </div>
    </div>
  );
}