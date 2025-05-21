import Greet from './Greet.jsx'
import Loginform from './Loginform.jsx'
import Die from './Die.jsx'
import Listpass from './Listpass.jsx'
import Doubledice from './Doubledice.jsx'

function App() {  

  return (
    <div>
    <h1>React | SG</h1>
    <Greet person ="Kallu"/>
    <Greet person ="Mallu"/>
    <Greet person ="Bulli"/>
    <Greet person ="Golu"/>
    <Loginform/>
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
    </div>

    
  )
}

export default App
