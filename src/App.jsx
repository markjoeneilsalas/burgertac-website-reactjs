import { useState } from 'react'
import './App.css'
import Navhero from './components/Navhero'
import Content1 from './components/Content1'
import Aboutus from './components/Aboutus'
import Orderonline from './components/Orderonline'
import Reservetable from './components/Reservetable'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navhero />
      <Content1 />
      <Aboutus />
      <Reservetable />
      <Orderonline />
      <Footer />
    </>
  )
}

export default App
