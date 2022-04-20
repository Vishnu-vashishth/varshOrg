import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Navbar1 from './components/TopNavbar/Navbar'
import Hero from './components/Hero/Hero'
import Temp from './components/TemplateShowCase/Temp'
import Carousal from './components/Carousal/Carousal'
import Contact from './components/ContactUsPage/Contact'
const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    {/* <ContactUs/> */}
    <Navbar1/>
    <Hero/>
    <Temp/>
    <div className='carousalDiv ' >
    <Carousal/>
    </div>
    <Contact/>
    </>
  )
}

export default App