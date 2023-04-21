import { useState } from "react";
import "./Pokemon.css";

const Pokemon = (props) => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [attempts, setAttempts] = useState(1);
    const [level, setLevel] = useState("");
    const [position, setPosition] = useState("");

    const randomPokemonId = Math.ceil(Math.random() * 150);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

    const fetchData = () => { 
        let top = Math.ceil(Math.random() * 100);

        while (top >= 55) {
            top = Math.ceil(Math.random() * 100);
        }

        const left = Math.ceil(Math.random() * 100);
        const level = Math.ceil(Math.random() * 100);

        const position = {
            position: "absolute",
            top: `${top}vh`,
            left: `${left}vw`
        }

        setPosition(position);
        setLevel(level);
        
        props.setInfo(null); 
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                props.setImage(data.sprites.front_default);
                setImage(data.sprites.front_default);

                let name = data.forms[0].name;
                name = name.charAt(0).toUpperCase() + name.slice(1);
                props.setName(name)
                setName(name);
            });
    }

    let catchLevel = 50;
    const catchAttempt = () => {
        let throwPoints = Math.ceil(Math.random() * 100);
        
        if (throwPoints < catchLevel && attempts < 3) {
            setAttempts(attempts + 1);
            props.setInfo(name + " resisted, try again. (Attempts " + attempts + "/3)");
        } else if (attempts >= 3) {
            props.setInfo("Oh no, " + name + " ran away... (Attempts: " + attempts + "/3)");
            setImage(false);
            setAttempts(1);
        } else if (throwPoints >= catchLevel) {
            props.setInfo("Success, " + name + " was caught. " + name + " was added to your Pokedex.");
            setImage(false);
            setAttempts(1);
            addToPokedex(name, image);
        }
    }

    const addToPokedex = (name, image) => {
        let pokemonCollection = JSON.parse(localStorage.getItem('pokemonCollection')) || []; 
        pokemonCollection.push({name: name, image: image});
        localStorage.setItem('pokemonCollection', JSON.stringify(pokemonCollection));
        console.log(pokemonCollection);
    }

    let top = Math.ceil(Math.random() * 100);

    while (top >= 55) {
        top = Math.ceil(Math.random() * 100);
    }

    const left = Math.ceil(Math.random() * 100);
    const level = Math.ceil(Math.random() * 100);

    const position = {
        position: "absolute",
        top: `${top}vh`,
        left: `${left}vw`
    }

    if (!image) {
        return (
            <>
                <button onClick={fetchData}>Look for Pokémons</button>
                <div>Image is loading/is not fetched</div>
            </>
        );
    }

    return (
        <div style={position} className="pokemon">
            <p>Name: {name} Level: {level}</p>
            <img 
                onClick={catchAttempt}
                className="sprite" 
                src={image} 
                alt={name}
            />
        </div>
    );
}

export default Pokemon;

