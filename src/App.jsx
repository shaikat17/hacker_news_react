import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchForm from './components/SearchForm'
import Buttons from './components/Buttons'
import Stories from './components/Stories'

function App() {

  return (
    <>
    <SearchForm/>
    <Buttons/>
    <Stories/>
    </>
  )
}

export default App
