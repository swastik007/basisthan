import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/HeaderSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import CalltoAction from './components/CalltoAction.jsx'
import FooterSection from './components/FooterSection.jsx'
import VideoSection from './components/VideoSection.jsx'
import AboutSection from './components/AboutSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <VideoSection />
    <AboutSection />
    <HeroSection />
     <CalltoAction />
     <FooterSection />
    </>
  )
}

export default App
