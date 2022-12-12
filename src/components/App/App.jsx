import React from 'react'
import './App.css'
import Home from "../../routes/Home/Home"
import About from "../../routes/About/About"
import Services from "../../routes/Services/Services"
import Contact from "../../routes/Contact/Contact"
import { Route , Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route element = {<Home/>} path = "/" />
        <Route element = {<About/>} path = "/about" />
        <Route element = {<Services/>} path = "/service" />
        <Route element = {<Contact/>} path = "/contact" />
      </Routes>
    </div>
  )
}

export default App
