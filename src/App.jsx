import React from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <AboutMe />
        <Projects />
      </div>
    </>
  )
}

export default App