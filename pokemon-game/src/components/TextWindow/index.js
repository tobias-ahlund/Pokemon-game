import "./TextWindow.css";

const TextWindow = (props) => {
    return (
        <div>
            <div className="text-window">
                <p className={props.slideUp}>{props.text}</p>
            </div>
        </div>
    );
};

export default TextWindow;