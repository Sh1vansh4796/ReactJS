export default function Die({numSide = 6}){
    
    const roll = Math.floor(Math.random()*numSide + 1)
    return(<h1> Rolling die = {roll} </h1>)
}