import './App.css';
import GameWindow from "./components/GameWindow";
import TextWindow from './components/TextWindow';
import Pokedex from './components/Pokedex';
import Pokemon from "./components/Pokemon";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <GameWindow />
      <Pokedex 
        pokemon={image}
        name={name}
      />
      <TextWindow 
        text={info ? info : name && name + " appeared! Click on " + name + " to throw a pokéball."}
      />
      <Pokemon 
        setName={setName}
        setInfo={setInfo}
        setImage={setImage}
      />
    </div>
  );
}

export default App;
