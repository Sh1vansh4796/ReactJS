import './Pokemon.css'

export default function Die(){
    const random = Math.floor(Math.random()*151 + 1)
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`
    return( <div className="Pokemon">
        <h1>Pokemon #{random}</h1>
    <img src= {url} />
    </div>)
}

