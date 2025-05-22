import './App.css'
import Counter from './Counter.jsx'
import Toggler from './Toggler.jsx'
// when data needs to change while working, use state
// we cannot change props inside function

function App() {

  return (
    <div>
    <Counter/>
    <Toggler/>
    </div>
  )
}

export default App
