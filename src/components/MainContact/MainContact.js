import React from 'react'
import ContactSection from '../ContactSection/ContactSection'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import GoogleMapComponent from '../Google/Google'
import ContactTable from '../ContactTable/ContactTable'

function MainContact() {
  return (
    <div>
        <Header/>
        {/* <Navbar/> */}
        <ContactSection/>
        <ContactTable/>
        <GoogleMapComponent/>
        <Footer/>
    </div>
  )
}

export default MainContact