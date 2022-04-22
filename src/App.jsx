import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Home} from "./components/Home"
import { PetHouse } from './components/PetHouse'
import { PetHouseForm } from './components/PetHouseForm'

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={ < Home /> }></Route>
        <Route path='/listing/:id' element={ < PetHouse /> }></Route>
        <Route path='/listing/create' element={ < PetHouseForm /> }></Route>
      </Routes>
    </div>
  )
}

export default App
