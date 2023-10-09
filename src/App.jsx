import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
const App = () => {
  const [dayTime, setDayTime] = useState(true)
  return (
    <main>
      <Nav setDayTime={setDayTime} dayTime={dayTime} />
      <Routes>
        <Route path='/' element={<Landing dayTime={dayTime} />} />
        <Route path='/burgers' element={<BurgerShop />} />
      </Routes>
    </main>
  )
}
export default App