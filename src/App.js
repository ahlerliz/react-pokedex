import logo from './logo.svg';
import './App.css';
import pokemonList from './pokemon';
import Pokedex from './Pokedex';


function App() {
  return (
    <div className="App">
      <Pokedex pokemonList={pokemonList}/>
    </div>
  );
};

export default App;
