import React from 'react'
// import HeaderNavbar from './components/HeaderNavbar'
import HeroSection from './components/HeroSection'
import WhyChoose from './components/WhyChoose'
import ReadyToStartYourJourney from './components/ReadyToStartYourJourney'
import Footer from './components/Footer'

const HeroSections = () => {
  return (
    <>
    <div>
      {/* <HeaderNavbar/> */}
      {/* Hero sections */}
      <HeroSection/>
      {/* why choose us */}
      /<WhyChoose/>
      {/* ready to start your journey */}
      <ReadyToStartYourJourney/>
      {/* Footer */}
      <Footer/>
    </div>
    </>

  )
}

export default HeroSections
