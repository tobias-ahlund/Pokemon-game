import styles from "./MenuButton.module.css";

const MenuButton = (props) => {

    return (
        <button onClick={props.handleClick} className={styles.MenuButton}>Menu</button>
    );
}

export default MenuButton;