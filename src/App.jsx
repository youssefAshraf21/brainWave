import { useState } from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'

const App = () => {

  return (
    <>
    
    <div className='pt-19 lg:pt-21 overflow-hidden'>
      <Header />
      <Hero />
      <Benefits />
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
