import { useState } from "react";
export default function Counter(){
    // important = useState must be inside function/////
    const [count,setCount] = useState(5)
    const changeNum =()=>(
        setCount(count+1)
    )
    return(
        <div>
            <p>Current count is : {count}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}