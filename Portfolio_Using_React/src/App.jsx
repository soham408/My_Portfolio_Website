import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
