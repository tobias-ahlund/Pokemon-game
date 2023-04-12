import './App.css';
import GameWindow from "./components/GameWindow";
import TextWindow from './components/TextWindow';
import Pokemon from "./components/Pokemon";

function App() {
  const pokemon = document.querySelector(".pokemon");
  if (pokemon) {
    console.log("sdfgds");
  }

  return (
    <div className="App">
      <GameWindow />
      <TextWindow text="this is some text" />
      <Pokemon />
    </div>
  );
}

export default App;
