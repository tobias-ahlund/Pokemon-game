import styles from './Pokedex.module.css';
import pokedex from '../../assets/images/pokedex.png';
import { useState } from 'react';

const Pokedex = (props) => {
    const [isActive, setActive] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    let caughtPokemons = JSON.parse(localStorage.getItem('pokemonCollection'));

    const activatePokedex = () => {
        setActive(isActive => !isActive);
    }

    const inspectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    return <div className={isActive ? styles.active : styles.container}>
        <div className={isActive ? styles.screen : styles.hidden}>
            {caughtPokemons && caughtPokemons.map(caughtPokemon => (
                    <div className={styles.pokedexItem} key={caughtPokemon.name}>
                        <div className={styles.textWrapper}>
                            <p>{caughtPokemon.name}</p>
                        </div>
                        <img 
                        className={styles.pokemon_image} 
                        src={caughtPokemon.image} 
                        alt={caughtPokemon.name} 
                        onClick={() => {
                            inspectPokemon(caughtPokemon);
                            let index = caughtPokemons.findIndex(pokemon => pokemon.name === caughtPokemon.name);
                            index++;
                            console.log(index);
                        }} />
                    </div>
                ))}
            {selectedPokemon && (
                <div className={styles.single_pokemon_container}>
                    <div className={styles.single_pokemon}>
                        <p>{selectedPokemon.name}</p>
                        <img src={selectedPokemon.image} alt={selectedPokemon.name}></img>
                        <p>Weight: {selectedPokemon.weight}</p>
                        <p>Ability: {selectedPokemon.firstAbility}</p>
                        <p>Description: {selectedPokemon.firstAbilityDescription}</p>
                        <p>Ability: {selectedPokemon.secondAbility}</p>
                        <p>Description: {selectedPokemon.secondAbilityDescription}</p>
                        <button 
                        onClick={() => {setSelectedPokemon(null)}} 
                        className={!isActive ? styles.hidden : styles.backButton}>
                            Back to Pokedex
                        </button>

                        <button 
                        onClick={() => {
                            let index = caughtPokemons.findIndex(pokemon => pokemon.name === selectedPokemon.name);
                            let indexCounter = index + 1;
                            inspectPokemon(caughtPokemons[indexCounter++]); 
                            
                            if (indexCounter === caughtPokemons.length + 1) {
                                indexCounter = 1;
                                inspectPokemon(caughtPokemons[indexCounter]); 
                            }
                            console.log(indexCounter);
                        }} 
                        className={styles.nextButton}>
                            Next Pokemon
                        </button>
                    </div>
                </div>
            )}
        </div>
        <img 
        className={isActive ? styles.active_image : styles.image}
        src={pokedex} alt='The original pokedex.'
        onClick={activatePokedex}>
        </img>
        <button onClick={() => {setActive(false)}} className={!isActive ? styles.hidden : styles.closeButton}>Close Pokedex</button>
    </div>
}
export default Pokedex;