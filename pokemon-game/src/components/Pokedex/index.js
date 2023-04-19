import styles from './Pokedex.module.css';
import pokedex from '../../assets/images/pokedex.png';
import pokedexLogo from '../../assets/images/pokedex-logo.png';
import { useState } from 'react';

const Pokedex = () => {
    const [isActive, setActive] = useState(false);

    const activatePokedex = () => {
        setActive(isActive => !isActive);
    }

    return <div className={isActive ? styles.active : styles.container}>
        <div className={isActive ? styles.screen : styles.hidden}>
            {/* <img className={styles.pokedex_logo} src={pokedexLogo}></img> */}
        </div>
        <img className={isActive ? styles.active_image : styles.image} src={pokedex} alt='The original pokedex.' onClick={activatePokedex}></img>
    </div>
}
export default Pokedex;