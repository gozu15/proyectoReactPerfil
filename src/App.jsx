import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavBar } from './components/navbar/NavBar'
import { ImagePrincipal } from './components/image-principal/ImagePrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <ImagePrincipal/>
    </div>
  )
}

export default App
