import React from 'react'
import Navbar from '../components/landingPage/sections/Navbar'
import MainSection from '../components/landingPage/sections/MainSection.jsx'
import Feuters from '../components/landingPage/sections/Feuters.jsx'
import AboutUs from '../components/landingPage/sections/AboutUs.jsx'
import LastSection from '../components/landingPage/sections/LastSection.jsx'
import Footer from '../components/landingPage/sections/Footer.jsx'
import '../components/landingPage/landingPage.css'


export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col w-full'>
        <Navbar/>
        <MainSection/>
        <AboutUs/>
        <Feuters/>
        <LastSection/>
        <Footer/>
    </div>
  )
}
