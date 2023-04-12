import styles from './Pokedex.module.css';
import image from '../../assets/images/pokedex.png';
import { useState } from 'react';

const Pokedex = (props) => {
    const [isActive, setActive] = useState(false);

    const activatePokedex = () => {
        setActive(isActive => !isActive);
        console.log(setActive);
    }

    return <div className={isActive ? styles.active : styles.container} onClick={activatePokedex}>
        <div className={isActive ? styles.circle : styles.hidden}></div>
        <div className={isActive ? styles.textbox : styles.hidden}></div>
        <img className={isActive ? styles.hidden : styles.image} src={image} alt='The original pokedex.'></img>
    </div>
}

export default Pokedex;