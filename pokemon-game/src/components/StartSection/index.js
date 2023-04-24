import styles from "./StartSection.module.css";
import { useState } from "react";

const StartSection = () => {
    const [hidden, setHidden] = useState(false);

    return (
        <div className={hidden ? styles.hidden : styles.startSection}>
            <h1>Pokemon game x2000</h1>
            <p>Catch as many Pokémons as possible, and read all about them in the Pokédex.</p>
            <p>Press the start button when you're ready.</p>
            <button onClick={() => {setHidden(true)}}>Lets do this</button>
        </div>
    );
};

export default StartSection;