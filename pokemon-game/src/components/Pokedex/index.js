import styles from './Pokedex.module.css';
import pokedex from '../../assets/images/pokedex.png';
import { useState } from 'react';

const Pokedex = (props) => {
    const [isActive, setActive] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    let caughtPokemons = JSON.parse(localStorage.getItem('pokemonCollection')) || [];

    const activatePokedex = () => {
        setActive(isActive => !isActive);
    }

    const inspectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    let lastPokemon = caughtPokemons.length;
    let currentPokemon;
    if (selectedPokemon != null) {
        currentPokemon = caughtPokemons.findIndex(pokemon => pokemon.name === selectedPokemon.name);
        currentPokemon += 1;
    }

    return <div className={isActive ? styles.active : styles.container}>
        <div className={isActive ? styles.screen : styles.hidden}>
            {caughtPokemons && caughtPokemons.map(caughtPokemon => (
                    <div 
                        className={styles.pokedexItem} 
                        key={caughtPokemon.name}
                        onClick={() => {
                            inspectPokemon(caughtPokemon);
                            let index = caughtPokemons.findIndex(pokemon => pokemon.name === caughtPokemon.name);
                            index++;
                            console.log(index);
                        }}
                    >
                    <div className={styles.textWrapper}>
                        <p>{caughtPokemon.name}</p>
                    </div>
                    <img 
                        className={styles.pokemonImage} 
                        src={caughtPokemon.image} 
                        alt={caughtPokemon.name} 
                    />
                    </div>
                ))}
            {selectedPokemon && (
                <div className={styles.singlePokemonContainer}>
                    <div className={styles.singlePokemon}>
                        <p>{currentPokemon + "/" + lastPokemon}</p>
                        <p><strong>{selectedPokemon.name}</strong></p>
                        <img src={selectedPokemon.image} alt={selectedPokemon.name}></img>
                        <p><strong>Weight:</strong> {selectedPokemon.weight}</p>
                        <p><strong>Ability:</strong> {selectedPokemon.firstAbility}</p>
                        <p><strong>Description:</strong> {selectedPokemon.firstAbilityDescription}</p>
                        <p><strong>Ability:</strong> {selectedPokemon.secondAbility}</p>
                        <p><strong>Description:</strong> {selectedPokemon.secondAbilityDescription}</p>
                        <button 
                        onClick={() => {setSelectedPokemon(null)}} 
                        className={!isActive ? styles.hidden : styles.backButton}>
                            Show all Pokémons
                        <span></span>
                        </button>

                        <button 
                        onClick={() => {
                            let index = caughtPokemons.findIndex(pokemon => pokemon.name === selectedPokemon.name);
                            let indexCounter = index + 1;
                            inspectPokemon(caughtPokemons[indexCounter++]); 
                            
                            if (indexCounter === caughtPokemons.length + 1) {
                                indexCounter = 0;
                                inspectPokemon(caughtPokemons[indexCounter]); 
                                indexCounter++;
                            }
                            console.log(indexCounter);
                            }} 
                            className={styles.nextButton}
                        >
                            &gt;&gt;
                            <span></span>
                        </button>
                        <button 
                            onClick={() => {
                                let index = caughtPokemons.findIndex(pokemon => pokemon.name === selectedPokemon.name);
                                let indexCounter = index - 1;
                                inspectPokemon(caughtPokemons[indexCounter++]); 
                                
                                if (indexCounter === 0) {
                                    indexCounter = caughtPokemons.length - 1;
                                    inspectPokemon(caughtPokemons[indexCounter]); 
                                    indexCounter++;
                                }
                                console.log(indexCounter);
                            }} 
                            className={styles.previousButton}
                        >
                            &lt;&lt;
                            <span></span>
                        </button>
                    </div>
                </div>
            )}
        </div>
        <img 
        className={isActive ? styles.activeImage : styles.image}
        src={pokedex} alt='The original pokedex.'
        onClick={activatePokedex}>
        </img>
        <button 
            onClick={() => {
                setActive(false); 
                setSelectedPokemon(null)}
            } 
            className={
                !isActive ? styles.hidden : styles.closeButton
            }>
            Close Pokedex
            <span></span>
        </button>
    </div>
}
export default Pokedex;