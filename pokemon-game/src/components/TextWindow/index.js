import "./TextWindow.css";

const TextWindow = (props) => {
    return (
        <div className="text-window"><p>{props.text}</p></div>
    );
};

export default TextWindow;