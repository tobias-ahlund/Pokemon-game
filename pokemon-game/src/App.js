import './App.css';
import GameWindow from "./components/GameWindow";
import TextWindow from './components/TextWindow';
import Pokedex from './components/Pokedex';
import Pokemon from "./components/Pokemon";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <GameWindow />
      <Pokedex />
      <TextWindow 
        text={input ? input : name && name + " appeared!"}
      />
      <Pokemon 
        setName={setName}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
