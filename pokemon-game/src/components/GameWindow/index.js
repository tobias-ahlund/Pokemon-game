import "./GameWindow.css";
import backgroundImage from "../../assets/images/background-image.jpg";

const GameWindow = () => {
    return (
        <div className="background-image">
            <img src={backgroundImage} alt="Environment background"></img>
        </div>
    );
};

export default GameWindow;