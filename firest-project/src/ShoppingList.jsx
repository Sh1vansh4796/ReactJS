export default function ShoppingList({items}){
    return(<ul> SHOPPING LIST {
        items.map((i)=>(
            
                <li key={i.id} style={{color : i.completed ? "grey" : "red",
                    textDecoration : i.completed? "line-through":"none"
                }}>
                    {i.quantity} - {i.item}
                </li>
            
            ))}
        </ul>
        
    )
}