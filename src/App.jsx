import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductImage from './components/ProductImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductImage src="https://d-art.ppstatic.pl/kadry/k/r/05/ef/6903affc696a0_o_medium.jpg" alt="Kononowicz prokurator" />
    </>
  )
}

export default App
