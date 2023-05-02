import "./TextWindow.css";
import Pokeballs from "../Pokeballs";
import MenuButton from "../MenuButton";

const TextWindow = (props) => {
    return (
        <div className="text-window-wrapper">
            <div className="text-window">
                <p>{props.text}</p>
            </div>
            <MenuButton 
                handleClick={props.handleClick}
            />
            <Pokeballs
                greatball={props.greatball} 
                pokeball={props.pokeball}
                equipped={props.equipped}
            />
        </div>
    );
};

export default TextWindow;