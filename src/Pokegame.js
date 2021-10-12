import pokemonList from "./pokemon.js"
import Pokedex from "./Pokedex.js"
import { generateHands } from "./helpers.js"

function Pokegame() {
    let hands = generateHands(pokemonList) // gives back {hand1, hand2}
    return (
        <div>
            <div>
                <h1> Hand 1</h1>
                <Pokedex pokemonList={hands.handOne} />
            </div>
            <div>
                <h1> Hand 2</h1>
                <Pokedex pokemonList={hands.handTwo} />
            </div>
        </div>
    )
}

export default Pokegame;



