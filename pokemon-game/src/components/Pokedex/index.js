import styles from './Pokedex.module.css';
import image from '../../assets/images/pokedex.png';
import { useState } from 'react';

const Pokedex = () => {
    const [isActive, setActive] = useState(false);

    const activatePokedex = () => {
        setActive(isActive => !isActive);
    }

    return <div className={isActive ? styles.active : styles.container}>
        <div className={isActive ? styles.screen : styles.hidden}></div>
        <img className={isActive ? styles.active_image : styles.image} src={image} alt='The original pokedex.' onClick={activatePokedex}></img>
    </div>
}

export default Pokedex;