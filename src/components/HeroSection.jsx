import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-[100svh] relative overflow-hidden'>
        <video autoPlay muted loop playsInline className='sm:hidden md:hidden block w-full h-full object-cover object-top' src="/heroVid.mp4"></video>
        <video autoPlay muted loop playsInline className='sm:block md:block hidden w-full h-full object-cover object-top' src="/heroVidPhn.mp4"></video>
        <div className='w-full flex items-center justify-center flex-col h-screen absolute top-0 left-0'>
            <img src="/text_logo.avif" className='sm:h-[4vw] md:h-[3vw] lg:h-[2.6vw] h-[2vw] sm:top-[6vw] md:top-[4vw] lg:top-[4vw] md:left-[6vw] lg:left-[6vw] sm:left-1/2 sm:-translate-x-1/2 top-[2vw] left-[3.5vw] absolute' alt="" />
            <h1 className='soon sm:text-[8vw] md:text-[7.2vw] lg:text-[6vw] xl:text-[4.8vw]  text-[3.5vw] uppercase' style={{fontWeight:"900"}}>Coming Soon</h1>
            <p className='sm:text-[3vw] md:text-[2.8vw] lg:text-[2vw] xl:text-[1.8vw] text-[1.2vw] sm:font-semibold font-regular  font-[font1] sm:mb-[8vh]'>A Brand New Website Is Coming Soon!</p>
        </div>
    </div>
  )
}

export default HeroSection