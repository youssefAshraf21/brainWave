import { useState } from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'

const App = () => {

  return (
    <>
    
    <div className='pt-19 lg:pt-21 overflow-hidden'>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
