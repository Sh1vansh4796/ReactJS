export default function Die(){
    
    const roll = Math.floor(Math.random()*6 + 1)
    return(<h1> Rolling die = {roll} </h1>)
}