import './App.css';
import GameWindow from "./components/GameWindow";
import TextWindow from './components/TextWindow';
import Pokedex from './components/Pokedex';
import Pokemon from "./components/Pokemon";
import { useState } from "react";

function App() {
  const [name, setName] = useState("hej");

  return (
    <div className="App">
      <GameWindow />
      <Pokedex />
      <TextWindow text={name} />
      <Pokemon setName={setName}/>
    </div>
  );
}

export default App;
