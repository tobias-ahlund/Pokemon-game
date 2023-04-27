import './App.css';
import StartSection from './components/StartSection';
import GameWindow from "./components/GameWindow";
import TextWindow from './components/TextWindow';
import Pokedex from './components/Pokedex';
import Pokemon from "./components/Pokemon";
import MenuButton from "./components/MenuButton";
import ProgressBar from './components/ProgressBar';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(null);
  const [firstAbility, setFirstAbility] = useState(null);
  const [updatePokedex, setUpdatePokedex] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [pokeball, setPokeball] = useState("typePokeball");

  return (
    <div className="App">
      <StartSection 
        hidden={hidden}
        setHidden={() => setHidden(true)}
      />
      <GameWindow />
      <ProgressBar />
      <Pokedex 
        pokemon={image}
        name={name}
        firstAbility={firstAbility}
        updatePokedex={updatePokedex}
      />
      <TextWindow 
        text={info ? info : name && name + " appeared! Click on " + name + " to throw a pokéball."}
        pokeball={() => setPokeball("typePokeball")}
        greatball={() => setPokeball("typeGreatball")}
      />
      <MenuButton 
        handleClick={() => setHidden(false)}
      />
      <Pokemon 
        setName={setName}
        setInfo={setInfo}
        setImage={setImage}
        setFirstAbility={setFirstAbility}
        setUpdatePokedex={setUpdatePokedex}
        pokeball={pokeball}
      />
    </div>
  );
}

export default App;
