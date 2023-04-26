import styles from "./StartSection.module.css";
import { useState } from "react";

const StartSection = () => {
    const [hidden, setHidden] = useState(false);

    return (
        <div className={hidden ? styles.hidden : styles.startSection}>
            <div className={styles.wrapper}>
                <h1>Pokemon game</h1>
                <p>Catch as many Pokémons as possible, and read all about them in the Pokédex.</p>
                <p>Press the button when you're ready.</p>
                <button onClick={() => {setHidden(true)}}>Go to game</button>
            </div>
        </div>
    );
};

export default StartSection;