
import Pokecard from "./Pokecard";

function Pokedex({pokemonList}){
    return(
        <div>
         {pokemonList.map(p => <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>)}
       </div>
    )
}

export default Pokedex;
