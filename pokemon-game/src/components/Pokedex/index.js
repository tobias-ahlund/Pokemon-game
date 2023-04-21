import styles from './Pokedex.module.css';
import pokedex from '../../assets/images/pokedex.png';
import { useState } from 'react';

const Pokedex = (props) => {
    const [isActive, setActive] = useState(false);

    let caughtPokemons = JSON.parse(localStorage.getItem('pokemonCollection'));

    const activatePokedex = () => {
        setActive(isActive => !isActive);
    }

    return <div className={isActive ? styles.active : styles.container}>
        <div className={isActive ? styles.screen : styles.hidden}>
            {caughtPokemons && caughtPokemons.map(caughtPokemon => (
                    <div key={caughtPokemon.name}>
                        <p>{caughtPokemon.name}</p>
                        <img src={caughtPokemon.image} alt={caughtPokemon.name} />
                    </div>
                ))}
        </div>
        <img className={isActive ? styles.active_image : styles.image} src={pokedex} alt='The original pokedex.' onClick={activatePokedex}></img>
    </div>
}
export default Pokedex;