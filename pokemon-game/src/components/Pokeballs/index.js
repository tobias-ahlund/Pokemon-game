import pokeball from "../../assets/images/pokeball.svg";
import greatball from "../../assets/images/greatball.svg";
import styles from "./Pokeballs.module.css";

const Pokeballs = (props) => {
    return (
        <div className={styles.pokeballs}>
            <div 
                className={props.equipped === "typePokeball" ? styles.pokeball + " " + styles.equipped : styles.pokeball}
                onClick={props.pokeball}
            >
                <div className={styles.pokeballTextWrapper}>
                    <p>Pokéball</p>
                    <p>Catch rate: 50%</p>
                </div>
                <img src={pokeball} alt="pokeball" />
            </div>
            <div 
                className={props.equipped === "typeGreatball" ? styles.pokeball + " " + styles.equipped : styles.pokeball}
                onClick={props.greatball}
            >
                <div className={styles.pokeballTextWrapper}>
                    <p>Greatball</p>
                    <p>Catch rate: 66%</p>
                </div>
                <img src={greatball} alt="greatball" />
            </div>
        </div>
    );
}

export default Pokeballs;