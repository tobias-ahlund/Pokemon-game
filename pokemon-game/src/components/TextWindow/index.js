import "./TextWindow.css";
import Pokeballs from "../Pokeballs";

const TextWindow = (props) => {
    return (
        <div className="text-window-wrapper">
            <div className="text-window">
                <p>{props.text}</p>
            </div>
            <Pokeballs
                greatball={props.greatball} 
                pokeball={props.pokeball}
                equipped={props.equipped}
            />
        </div>
    );
};

export default TextWindow;