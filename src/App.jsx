import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import kononowicz2 from './assets/kononowicz2.jpg'
import './App.css'
import ProductImage from './components/ProductImage'
import AvatarList from './components/AvatarList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductImage src="https://d-art.ppstatic.pl/kadry/k/r/05/ef/6903affc696a0_o_medium.jpg" alt="Kononowicz prokurator" />
      <ProductImage src={kononowicz2} alt="Kononowicz czapka" />
      <ProductImage src={"src/assets/kononowicz2.jpg"} alt="kononowicz z czapka" />
      <AvatarList users={[
        { id: 1, name: "Jan", role: "Administrator" },
        { id: 2, name: "Anna", role: "Użytkownik" },
        { id: 3, name: "Piotr", role: "Moderator" }
      ]} />
    </>
  )
}

export default App
