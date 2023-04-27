import pokeball from "../../assets/images/pokeball.svg";
import greatball from "../../assets/images/greatball.svg";
import styles from "./Pokeballs.module.css";

const Pokeballs = (props) => {
    return (
        <div className={styles.pokeballs}>
            <div className={styles.pokeball}>
                <div className={styles.pokeballTextWrapper}>
                    <p>Pokéball</p>
                </div>
                <img onClick={props.pokeball} src={pokeball} alt="pokeball" />
            </div>
            <div className={styles.greatball}>
                <div className={styles.pokeballTextWrapper}>
                    <p>Greatball</p>
                </div>
                    <img onClick={props.greatball} src={greatball} alt="greatball" />
            </div>
        </div>
    );
}

export default Pokeballs;