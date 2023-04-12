import './App.css';
import GameWindow from "./components/GameWindow";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <GameWindow>
        <Pokemon />
      </GameWindow>
    </div>
  );
}

export default App;
