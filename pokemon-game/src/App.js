import logo from './logo.svg';
import './App.css';

function App() {

  const randomId = Math.ceil(Math.random() * 151);

  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  fetch(url)
  .then((res) => res.json())
  .then((json => console.log(json.forms[0].name)));

  return (
    <div className="App">
    </div>
  );
}

export default App;
