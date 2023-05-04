import { useState } from "react";
import "./Pokemon.css";

const Pokemon = (props) => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [weight, setWeight] = useState(null);
    const [baseExperience, setBaseExperience] = useState(null);
    const [attempts, setAttempts] = useState(1);
    const [level, setLevel] = useState("");
    const [position, setPosition] = useState("");
    const [firstAbility, setFirstAbility] = useState(null);
    const [secondAbility, setSecondAbility] = useState(null);
    const [firstAbilityDescription, setFirstAbilityDescription] = useState(null);
    const [secondAbilityDescription, setSecondAbilityDescription] = useState(null);
    const [catchAnimation, setCatchAnimation] = useState(null);

    const randomPokemonId = Math.ceil(Math.random() * 100);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

    const fetchData = () => { 
        let top = Math.ceil(Math.random() * 100);

        while (top >= 55) {
            top = Math.ceil(Math.random() * 100);
        }

        let left = Math.ceil(Math.random() * 85);

        while (left <= 15) {
            left = Math.ceil(Math.random() * 85);
        }

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

                setWeight(data.weight);

                setBaseExperience(data.base_experience);

                setFirstAbility(data.abilities[0].ability)
                setSecondAbility(data.abilities[1].ability)

                fetchAbilityDescription(data.abilities[0].ability.url, setFirstAbilityDescription);
                fetchAbilityDescription(data.abilities[1].ability.url, setSecondAbilityDescription);
            });
    }

    const fetchAbilityDescription = (url, abilityDescription) => {
        fetch(url)
            .then(response => response.json())
            .then (data => {
                abilityDescription(data.effect_entries[1].effect);
            });
    }

    let catchLevel = props.catchLevel;
    const catchAttempt = () => {
        let throwPoints = Math.ceil(Math.random() * 100);
        
        if (throwPoints < catchLevel && attempts < 3) {
            setAttempts(attempts + 1);
            props.setInfo(name + " resisted, try again. (Attempts " + attempts + "/3)");
        } else if (attempts >= 3) {
            props.setInfo("Oh no, " + name + " ran away... (Attempts: " + attempts + "/3)");
            setImage(null);
            setAttempts(1);
        } else if (throwPoints >= catchLevel) {
            props.setInfo("Success, " + name + " was caught. " + name + " was added to your Pokedex.");
            setCatchAnimation(true)
            setTimeout(() => {
                setImage(null);
                setCatchAnimation(null);
            }, 1000)
            setAttempts(1);
            addToPokedex();
        }
    }

    const addToPokedex = () => {
        let pokemonCollection = JSON.parse(localStorage.getItem('pokemonCollection')) || [];
        let experience = parseInt(localStorage.getItem('experience')) || 0;
        
        let count = 1;
        pokemonCollection.forEach(pokemon => {
            if (pokemon.name === name || pokemon.name === name + "(" + count + ")") {
                count++;
                while (pokemon.name === name + count) {
                    count++;
                }
            } 
        })

        pokemonCollection.push({
            name: count > 1 ? name + "(" + count + ")" : name,
            image: image,
            weight: weight,
            firstAbility: firstAbility.name,
            secondAbility: secondAbility.name,
            firstAbilityDescription: firstAbilityDescription,
            secondAbilityDescription: secondAbilityDescription
        });
        localStorage.setItem('pokemonCollection', JSON.stringify(pokemonCollection));

        experience += Math.ceil(baseExperience/10);
        localStorage.setItem('experience', experience)
    }

    if (!image) {
        return (
            <div>
                <button className="fetch-data-button" onClick={fetchData}>Look for Pokémons<span className="button-shadow"></span></button>
                <div>Image is loading/is not fetched</div>
            </div>
        );
    }

    return (
        <div style={position} className="pokemon">
            <div className="pokemonInfo">
                <p><strong>Name:</strong> {name}</p> 
                <p><strong>Level:</strong> {level}</p>
                <span></span>
            </div>
            <img 
                onClick={catchAttempt}
                className={catchAnimation ? "sprite " + props.pokeball : props.pokeball + " wobble"}
                src={image} 
                alt={name}
            />
        </div>
    );
}

export default Pokemon;

