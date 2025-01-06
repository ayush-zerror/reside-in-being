import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import React, { useEffect } from 'react'

const index = () => {
  useEffect(()=>{
     document.title = 'Reside In Being | Coming Soon!'
  },[])
  return (
    <>
    <HeroSection/>
    <Footer/>
    </>
  )
}

export default index