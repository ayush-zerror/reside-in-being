import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden'>
        <video autoPlay muted loop playsInline className='w-full h-full object-cover object-top' src="/heroVid.mp4"></video>
        <div className='w-full flex items-center justify-center flex-col h-screen absolute top-0 left-0'>
            <img src="/text_logo.avif" className='h-[2vw] top-[2vw] left-[3.5vw] absolute' alt="" />
            <h1 className='soon text-[3.8vw] font-extrabold uppercase'>Coming Soon</h1>
            <p className='text-[1.2vw] font-semibold'>A Brand New Website Is Coming Soon</p>
        </div>
    </div>
  )
}

export default HeroSection