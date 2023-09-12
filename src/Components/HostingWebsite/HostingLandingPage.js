import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import PricingFilter from './PricingFilter'
import PricingCards from './PricingCards'
import GetInTouch from './GetInTouch'
import Footer from './Footer'
import TrueCloudHosting from './TrueCloudHosting'
import RealCustomers from './RealCustomers'

const HostingLandingPage = () => {
  return (
    <div className='container  mx-auto p-5'>
        <Navbar/>
        <HeroSection/>
        <TrueCloudHosting/>
        <PricingFilter/>
        <PricingCards/>
        <RealCustomers/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default HostingLandingPage