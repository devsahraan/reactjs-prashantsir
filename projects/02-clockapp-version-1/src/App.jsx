import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Heading from './components/Heading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <Heading/>
        <ClockSlogan/>
        <CurrentTime/>
      </center>
    </>
  )
}

export default App
