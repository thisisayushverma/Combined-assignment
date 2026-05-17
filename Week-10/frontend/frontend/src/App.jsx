import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register'
import Landing from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
