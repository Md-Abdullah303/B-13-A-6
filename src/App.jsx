import { BiFlag } from 'react-icons/bi'
import './App.css'
import Navber from './assets/Component/Navber/Navber'
import HeroSection from './assets/Component/HeroSection/HeroSection'
import Rating from './assets/Component/Rating/Rating'
import GetStarted from './assets/Component/GetStarted/GetStarted'
import TransparentPricing from './assets/Component/TransparentPricing/TransparentPricing'
import Footer from './assets/Component/Footer/Footer'
import ProductsContainer from './assets/Component/ProductsContainer/ProductsContainer'
import { Suspense } from 'react'

function App() {

  const fetchProducts = fetch('/product.json').then(res => res.json());

  return (
    <>
      <header>
        <Navber></Navber>
        <HeroSection></HeroSection>
      </header>
      <main>
        <Rating></Rating>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <ProductsContainer fetchProducts={fetchProducts}></ProductsContainer>
        </Suspense>
        <GetStarted></GetStarted>
        <TransparentPricing></TransparentPricing>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
