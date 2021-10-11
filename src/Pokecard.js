
function Pokecard({id, name, type, base_experience}){
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div>
            <i>{id}</i>
            <b> {name}</b>
            <i> {type}</i>
            <i> {base_experience}</i>
            <img src={image}></img>
        </div>
    );
}

export default Pokecard;