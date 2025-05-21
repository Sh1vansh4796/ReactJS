export default function ColorList({color}){
    return(
        <div>
            <h2>Color list is</h2>
            <ul>
            {
            color.map((col,idx) => <li key={idx} style={{ color: col }}> {col} </li> )
            }
            </ul>
        </div>

    )
}