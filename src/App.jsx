import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import BoradList from './routes/BoradList'
import Home from './routes/Home'
import Login from './routes/Login'
import Join from './routes/Join'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/board' element={<BoradList/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/join' element={<Join/>}/>
    </Routes>
  )
}

export default App
