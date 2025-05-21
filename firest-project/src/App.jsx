import Greet from './Greet.jsx'
import Loginform from './Loginform.jsx'
import Die from './Die.jsx'

function App() {  

  return (
    <div>
    <h1>React | SG</h1>
    <Greet person ="Kallu"/>
    <Greet person ="Mallu"/>
    <Greet person ="Bulli"/>
    <Greet person ="Golu"/>
    <Loginform/>

    <div>
    <Die/>
    <Die/>
    <Die/>
    <Die/>
    </div>
    </div>

    
  )
}

export default App
