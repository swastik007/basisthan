import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/HeaderSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import CalltoAction from './components/CalltoAction.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HeroSection />
     <CalltoAction />
    </>
  )
}

export default App
