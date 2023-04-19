import { useState } from "react";
import "./Pokemon.css";

const Pokemon = (props) => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);

    const randomPokemonId = Math.ceil(Math.random() * 150);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

    const fetchData = () => { 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setImage(data.sprites.front_default);
            props.setName(data.forms[0].name);
            setName(data.forms[0].name);
        });
    }

    let attemptsCounter = 0;
    const catchAttempt = () => {
        let caught = false;
        let catchRate = 50;
        let throwPoints = Math.ceil(Math.random() * 100);

        if (catchRate >= throwPoints) {
            props.setInput(name + " resisted, try again.");
            attemptsCounter++;
            if (attemptsCounter >= 3) {
                props.setInput("Oh no, " + name + " ran away...");
            }
        } else if (catchRate < throwPoints) {
            caught = true;
        }
        
        if (caught) {
            props.setInput("Success, " + name + " was caught. Why don't you read about " + name + " in your Pokedex?");
        }
    }

    let top = Math.ceil(Math.random() * 100);

    while (top >= 55) {
        top = Math.ceil(Math.random() * 100);
    }

    const left = Math.ceil(Math.random() * 100);

    const position = {
        position: "absolute",
        top: `${top}vh`,
        left: `${left}vw`
    }

    if (!image) {
        return (
            <>
                <button onClick={fetchData}>Load Pokemon</button>
                <div>Image is loading/is not fetched</div>
            </>
        );
    }

    return (
        <>  
            <div style={position} className="pokemon">
                <p>Click on {name} to catch it</p>
                <img 
                    onClick={catchAttempt}
                    className="sprite" 
                    src={image} 
                    alt={name}
                />
            </div>
        </>
    );
}

export default Pokemon;

