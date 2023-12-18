import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ServiceImg from '../../assets/1.webp'
import Footer from '../../components/Footer/Footer'
import Trip from '../../components/Trip/Trip'


const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Services"
        text=""
        buttonText=""
        url=""
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Services
