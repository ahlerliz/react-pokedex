import "./Pokecard.css"

function Pokecard({id, name, type, base_experience}){
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` // move the majority of this to global const
    return (
        <div className="Pokecard">
            <i>{id}</i>
            <b> {name}</b>
            <i> {type}</i>
            <i> {base_experience}</i>
            <img alt={name} src={image}/>
        </div>
    );
}

export default Pokecard;