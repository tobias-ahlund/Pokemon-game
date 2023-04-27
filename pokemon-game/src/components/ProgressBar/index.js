import styles from './ProgressBar.module.css';
import { useEffect, useState } from 'react';

const ProgressBar = (props) => {

    const [experience, setExperience] = useState(0);

    useEffect(() => {
        setInterval(() => {
            let localExperience = parseInt(localStorage.getItem('experience') || 0);
            setExperience(localExperience);
        }, 1000);
    }, []);

    return(
        <div className={styles.xp_bar_container}>
            <label for="xp"><b>Experience:</b> {experience} / 250</label>
            <progress id="xp" className={styles.progress} value={experience} max="250">Hello</progress>
        </div>
    )
}

export default ProgressBar;