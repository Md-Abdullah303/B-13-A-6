import { BiFlag } from 'react-icons/bi'
import './App.css'
import Navber from './assets/Component/Navber/Navber'
import HeroSection from './assets/Component/HeroSection/HeroSection'
import Rating from './assets/Component/Rating/Rating'
import GetStarted from './assets/Component/GetStarted/GetStarted'
import TransparentPricing from './assets/Component/TransparentPricing/TransparentPricing'
import Footer from './assets/Component/Footer/Footer'
import ProductsContainer from './assets/Component/ProductsContainer/ProductsContainer'
import { Suspense, useState } from 'react'
import Loding from './assets/UI/Loding/Loding'
import TransformSection from './assets/Component/TransformSection/TransformSection'

function App() {
  const [AddToCartLenght, setAddToCartLenght] = useState(0);


  return (
    <>
      <header>
        <Navber AddToCartLenght={AddToCartLenght}></Navber>
        <HeroSection></HeroSection>
      </header>
      <main>
        <Rating></Rating>
        <ProductsContainer
          AddToCartLenght={AddToCartLenght}
          setAddToCartLenght={setAddToCartLenght}
        ></ProductsContainer>
        <GetStarted></GetStarted>
        <TransparentPricing></TransparentPricing>
        <TransformSection></TransformSection>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
