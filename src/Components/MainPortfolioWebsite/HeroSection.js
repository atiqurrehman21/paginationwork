import React from 'react'
import profile from "./images/Frontend.png"
const HeroSection = () => {
  return (
    <div className=' flex justify-center items-center'>
        <div className=' flex justify-center items-center flex-col' >
            <div className='relative w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-28 mb-6 animate-title'>
                <img src={profile} alt='profile-image' />
            </div>
            <h1 class="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">Code With Atiq</h1>
        </div>
    </div>
  )
}

export default HeroSection