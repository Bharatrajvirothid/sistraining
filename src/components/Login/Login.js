import React from 'react'
import Header from '../Header/Header'
import ServicesSection from '../ServicessSection/ServicessSection'
import AboutSection from '../AboutSection/AboutSection'
import CustomCarousel from '../CustomCarousel/CustomCarousel'
import Footer from '../Footer/Footer'
import BlogSection from '../BlogSection/BlogSection'
// import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel//'
import ServicessSection from '../ServicessSection/ServicessSection'
import HomeForm from '../HomeForm/HomeForm'
import AnotherCarousel from '../AnotherCarousel/AnotherCarousel'

function Login() {
  return (
    <div>
        <Header/>
        <CustomCarousel/>
        <ServicessSection/>
        <AboutSection/>
        <AnotherCarousel/>
        <HomeForm/>
        <BlogSection/>
        <Footer/>
    </div>
  )
}

export default Login