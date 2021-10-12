import pokemonList from "./pokemon.js"
import Pokedex from "./Pokedex.js"
import { generateHands, scoreHand } from "./helpers.js"

function Pokegame() {
    let hands = generateHands(pokemonList); // gives back {hand1, hand2}
    let hand1Score = scoreHand(hands.handOne);
    let hand2Score = scoreHand(hands.handTwo);
    let hand1Winner = hand1Score > hand2Score;
    let hand2Winner = hand2Score > hand1Score;

    return (
        <div>
            <div>
                <h2> Hand 1 </h2>
                <Pokedex winner={hand1Winner} pokemonList={hands.handOne} />
                {/* <h1>{hand1Score > hand2Score ? 'This hand wins' : ''}</h1> */}
            </div>
            <div>
                <h2> Hand 2 </h2>
                <Pokedex winner={hand2Winner} pokemonList={hands.handTwo} />
                {/* <h1>{hand2Score > hand1Score ? 'This hand wins' : ''}</h1>    */}
            </div>
        </div>
    )
}

export default Pokegame;



