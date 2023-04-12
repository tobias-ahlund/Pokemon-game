import './App.css';
import GameWindow from "./components/GameWindow";
import TextWindow from './components/TextWindow';
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <GameWindow />
      <TextWindow text="this is some text" />
      <Pokemon />
    </div>
  );
}

export default App;
