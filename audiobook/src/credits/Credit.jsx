import styles from "./Credit.module.css";

function Credit(){

    //// Can make the text animated (oscillate between glowing a lot to a little), can also make it randomized between different elements to make it look like stars twinkling
    ///// Can also animate a star to do the above as well in one of the emtpy spaces
    //// Maybe animate random shooting stars every once in a while?
    return(
        <div className={styles.credit}>
         <h1>The Heart Behind the Journey</h1>
         <div className={styles.phil}>
            <h2>Giving Voice to Middle-earth</h2>
            <p>
                All audiobook chapter audio featured in this project was voiced, edited, and compiled by Phil Dragash. His exceptional narration captures the spirit, rhythm, and emotional weight of Tolkien’s world with remarkable skill. Beyond simply reading the text, Phil brings each character and scene to life with thoughtful inflection, pacing, and tone — immersing listeners in Middle-earth as though they were there themselves. His dedication to quality, both in performance and production, has earned deep respect among fans. We are honored to showcase his work as the backbone of this audiobook experience and gratefully acknowledge his contribution to preserving and sharing the legacy of J.R.R. Tolkien.
            </p>
         </div>
         <div className={styles.shore}>
            <h2>The Sound of Middle-earth</h2>
            <p>
                The music that enriches this audiobook experience would not be complete without acknowledging the profound impact of Howard Shore. As the composer of the original scores for Peter Jackson’s film adaptations of The Lord of the Rings and The Hobbit, Shore crafted a musical language that resonates deeply with the themes, cultures, and emotional landscapes of Middle-earth. His compositions—soaring, intimate, and timeless—have become inseparable from how we imagine Tolkien’s world. Though this project is independent and not affiliated with the films, we gratefully recognize the inspiration his work provides. Howard Shore’s music continues to elevate and deepen the journey for fans everywhere.
            </p>
         </div>
         <div className={styles.art}>
            <h2>The Vision of Middle-earth</h2>
            <p>
                I’d like to sincerely thank the many talented artists whose incredible work made this project more visually engaging and immersive. Special thanks to [Artist Name 1], [Artist Name 2], and [Artist Name 3]—your artwork added so much character and atmosphere to the app. I also want to acknowledge [Artist Name 4] and [Artist Name 5] for sharing your creations online for others to enjoy. This project wouldn’t be the same without your contributions, and I’m deeply grateful for the inspiration and generosity you’ve shared through your art.
            </p>
         </div>
         <div className={styles.tolkien}>
            <h2>Thanks to Beren</h2>
            <p>
                And lastly, I want to express my deepest gratitude to Professor J.R.R. Tolkien, whose extraordinary imagination and dedication gave the world the rich and timeless mythology of Middle-earth. His stories are more than tales of adventure—they are works of profound beauty, language, and lore that continue to inspire awe and wonder across generations. This project would not exist without the foundation he laid through The Hobbit, The Lord of the Rings, and The Silmarillion. Thank you, Professor Tolkien, for crafting a world so vivid and enduring that it feels as real as our own—and for inviting us all to journey there.
            </p>
         </div>
        </div>
    );

}

export default Credit;