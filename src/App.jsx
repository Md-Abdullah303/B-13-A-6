import { BiFlag } from 'react-icons/bi'
import './App.css'
import Navber from './assets/Component/Navber/Navber'
import HeroSection from './assets/Component/HeroSection/HeroSection'
import Rating from './assets/Component/Rating/Rating'
import GetStarted from './assets/Component/GetStarted/GetStarted'

function App() {

  return (
    <>
      <header>
        <Navber></Navber>
        <HeroSection></HeroSection>
      </header>
      <main>
        <Rating></Rating>

        <GetStarted></GetStarted>
      </main>
    </>
  )
}

export default App
