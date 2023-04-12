import { useEffect, useState } from "react";
import "./Pokemon.css";

const Pokemon = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const randomPokemonId = Math.ceil(Math.random() * 150);
        const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setImage(data.sprites.front_default))
    }, []);

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
        return <div>Image is loading</div>;
    }

    return <div className="pokemon"><img style={position} src={image} alt="Pokemon" /></div>;
};

export default Pokemon;

