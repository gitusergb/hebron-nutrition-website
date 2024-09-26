import React from 'react'
import Navbar from '../components/Navbar'
import Navbart from '../components/Navbart'
import SectionOne from '../components/SectionOne'
import TopBrands from '../components/TopBrands'
import FeaturedProducts from '../components/FeaturedProducts'
import FirstAdd from "../components/FirstAdd";
import Bestsellers from '../components/Bestsellers'
import ShopbyHealth from '../components/ShopbyHealth'
import Dealtheday from '../components/Dealtheday'
import Block from '../components/Block'
import HealthVlog from '../components/HealthVlog'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="bg-white">
        <Navbar />
        <Navbart />
        <SectionOne />
        <TopBrands />
        <FeaturedProducts />
        <FirstAdd />
        <Bestsellers />
        <ShopbyHealth />
        <Dealtheday />
        <Block />
        <HealthVlog />
        <Footer />
    </div>
  )
}

export default LandingPage