import styles from './ProgressBar.module.css';
import { useEffect, useState } from 'react';

const ProgressBar = (props) => {

    const [experience, setExperience] = useState(0);
    const [max, setMax] = useState(100);
    const [level, setLevel] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setExperience(localStorage.getItem('experience'));
        }, 1000);

        let localLevel = parseInt(localStorage.getItem('level') || 0);
        const progress = document.getElementById("progress");

        if(experience >= progress.max) {
            let updatedLevel = localLevel + 1;
            localStorage.setItem('level', updatedLevel);
            localStorage.setItem('experience', 0);
            setLevel(updatedLevel);
            setMax(max * 1.5);
        }

        setLevel(parseInt(localStorage.getItem('level')) || 0);
        setExperience(localStorage.getItem('experience'));

    }, [experience]);

    return(
        <div className={styles.xp_bar_container}>
            <p className={styles.level}>Level: {level}</p>
            <label for="progress"><b>Experience:</b> {experience} / {max}</label>
            <progress id="progress" className={styles.progress} value={experience} max={max}>Hello</progress>
        </div>
    )
}

export default ProgressBar;