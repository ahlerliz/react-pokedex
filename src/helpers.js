function generateHands(arr) {
    const deckSize = arr.length;
    const handOne = [];
    for (let i = 0; i < deckSize / 2; i++) {
        let randIdx = Math.floor(Math.random() * arr.length);
        handOne.push(arr[randIdx]);
        arr = arr.filter(p => p !== arr[randIdx])
        //arr.splice(randIdx, 1);
    }

    const handTwo = arr.slice(0);

    return {handOne, handTwo};
}

function scoreHand(hand){
    let score = 0;
    for (let card of hand){
        score += card.base_experience;
    }
    return score;
}


export { generateHands, scoreHand }


// pass in pokemon list
// in loop x 4
// create random num and extract and delete from original
// Hand 2 is created from leftover 4

// Score hands --
// 
// for each card in hand, add base_ex to score