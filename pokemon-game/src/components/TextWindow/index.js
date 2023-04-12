import "./TextWindow.css";

const TextWindow = (props) => {
    return (
        <div class="text-window"><p>{props.text}</p></div>
    );
};

export default TextWindow;