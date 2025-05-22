import { useState } from "react";
import "./Toggler.css";
export default function Toggler(){
    const[isHappy,setisHappy] = useState(true)
    const toggleHappy = ()=>setisHappy(!isHappy)
    return(
        <p onClick = {toggleHappy} className = "Toggler">
            {isHappy ? "UoU " : "TwT"}
        </p>

    )
}