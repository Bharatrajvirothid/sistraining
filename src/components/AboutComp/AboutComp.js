import React from 'react'
import AboutOne from '../AboutOne/AboutOne'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutTwo from '../AboutTwo/AboutTwo'
import AboutThree from '../AboutThree/AboutThree'
import AboutFour from '../AboutFour/AboutFour'
import AboutBackGround from '../AboutBackGround/AboutBackGround'


function AboutComp() {
  return (
    <div>
        <Header/>
        <AboutOne/>
        <AboutTwo/>
        <AboutThree/>
        <AboutBackGround/>
        <AboutFour/>
        <Footer/>
    </div>
  )
}

export default AboutComp