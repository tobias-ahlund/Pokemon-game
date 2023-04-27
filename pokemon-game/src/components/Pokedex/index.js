import styles from './Pokedex.module.css';
import pokedex from '../../assets/images/pokedex.png';
import { useState } from 'react';

const Pokedex = (props) => {
    const [isActive, setActive] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonIndex, setPokemonIndex] = useState(0);

    let caughtPokemons = JSON.parse(localStorage.getItem('pokemonCollection'));

    const activatePokedex = () => {
        setActive(isActive => !isActive);
    }

    const inspectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    console.log(caughtPokemons);

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
                        onClick={() => inspectPokemon(caughtPokemon)} />
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
                        className={!isActive ? styles.hidden : styles.closePokedex}>
                            Back to Pokedex
                        </button>

                        <button 
                        onClick={() => {
                            inspectPokemon(caughtPokemons[pokemonIndex]); 
                            setPokemonIndex(pokemonIndex + 1);
                            pokemonIndex === caughtPokemons.length - 1 && setPokemonIndex(0);
                            console.log(pokemonIndex);
                            console.log(caughtPokemons.length)
                        }} 
                        className={styles.next}>
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
        <button onClick={() => {setActive(false)}} className={!isActive ? styles.hidden : styles.closePokedex}>Close Pokedex</button>
    </div>
}
export default Pokedex;