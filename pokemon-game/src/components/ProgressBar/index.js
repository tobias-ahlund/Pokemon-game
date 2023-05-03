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

        let localMax = parseFloat(localStorage.getItem('max')) || 100;
        setMax(localMax);

        let localLevel = parseInt(localStorage.getItem('level') || 0);

        const progress = document.getElementById("progress");

        if(experience >= progress.max) {
            let updatedLevel = localLevel + 1;
            localStorage.setItem('level', updatedLevel);
            localStorage.setItem('experience', 0);
            setLevel(updatedLevel);

            let updatedMax = Math.round(localMax * 1.5);
            setMax(updatedMax);
            localStorage.setItem('max', updatedMax);
        }

        setLevel(parseInt(localStorage.getItem('level')) || 0);
        setExperience(localStorage.getItem('experience') || 0);

    }, [experience, level, max]);

    return(
        <div className={styles.xp_bar_container}>
            <p className={styles.level}>LVL: {level}</p>
            <div className={styles.xp_bar}>
                <progress id="progress" className={styles.progress} value={experience} max={max}></progress>
                <label htmlFor="progress">{experience} / {max}</label>
            </div>
        </div>
    )
}

export default ProgressBar;