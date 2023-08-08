import { useState } from 'react'
import './App.css'
import Navhero from './components/Navhero'
import Content1 from './components/Content1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navhero />
      <Content1 />
    </>
  )
}

export default App
