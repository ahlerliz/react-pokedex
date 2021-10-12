
import Pokecard from "./Pokecard";

function Pokedex({winner, pokemonList}){
    return(
        <div>
         {pokemonList.map(p => <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>)}
         <h3>{winner? "This hand Wins!" : "This hand Loses!"}</h3>
       </div>
    )
}

export default Pokedex;
