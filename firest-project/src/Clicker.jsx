function HandleClick(){
    console.log("clickedd")
}

export default function Clicker(){
    return (
        <div>
            <p>Click on this button</p>
            <button onClick={HandleClick}>Click me</button> 
        </div>
    )
}