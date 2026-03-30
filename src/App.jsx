import { BiFlag } from 'react-icons/bi'
import './App.css'
import Navber from './assets/Component/Navber/Navber'
import HeroSection from './assets/Component/HeroSection/HeroSection'
import Rating from './assets/Component/Rating/Rating'
import GetStarted from './assets/Component/GetStarted/GetStarted'
import TransparentPricing from './assets/Component/TransparentPricing/TransparentPricing'
import Footer from './assets/Component/Footer/Footer'

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
        <TransparentPricing></TransparentPricing>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
