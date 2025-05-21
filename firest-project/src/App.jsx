import Greet from './Greet.jsx'
import Loginform from './Loginform.jsx'
import Die from './Die.jsx'
import Listpass from './Listpass.jsx'
import Doubledice from './Doubledice.jsx'
import Heading from './Heading.jsx'
import ColorList from './ColorList.jsx'
import ShoppingList from './ShoppingList.jsx'
import Clicker from './Clicker.jsx'

const data = [
  {id : 1,item : "eggs" , quantity :12 , completed : false},
  {id : 2,item : "milk" , quantity :5 , completed : true},
  {id : 3,item : "paneer" , quantity :10 , completed : false},
  {id : 4,item : "PS5" , quantity :1 , completed : true},
  {id : 5,item : "AK-47" , quantity :47 , completed : true}
]
function App() {  

  return (
    <div>
    <Heading color = 'red'  text = "Well Hello there "/>
    <h1>React | SG</h1>
    <Greet person ="Kallu"/>
    <Greet person ="Mallu"/>
    <Greet person ="Bulli"/>
    <Greet person ="Golu"/>
    <Loginform/>
    <Clicker/>
    <br />
    <Listpass values = {[1,2,3]}/>
    <Listpass values = {[1,'b','c']}/>
    

    <div>
    <Die numSide={7}/>
    <Die numSide={20}/>
    <Die numSide={18}/>
    <Die/>
    <Die numSide={5}/>
    </div>
    <br />
    <h1>Dice Game</h1> <br />
    <h2>
      <Doubledice/>
    </h2>

    <ColorList color = {['Red','Orange','Purple',"Olive"]}/>

    <ShoppingList items = {data}/>
    </div>

    
  )
}

export default App
