import styles from './PokemonSprite.module.css';

const pokemonSprite = (props) => {
    return (<img src={props.src} alt="A sprite of a Pokemon."/>)
}

export default pokemonSprite;