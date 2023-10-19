import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil.jsx'
import Botones from './components/Botones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Perfil/>
      <Botones/>
      </div>
    </>
  )
}

export default App
