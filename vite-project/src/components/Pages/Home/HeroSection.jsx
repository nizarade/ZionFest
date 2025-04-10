import React from 'react'
import HeroImage from '../../../../src/assets/hero_img.png'
import Button from '../../Button'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center mb-2'>
        <div className='flex flex-col w-full justify-center items-center text-center '>
          <p className='text-4xl md:text-6xl font-medium mb-5'>Welcome to<br/>Reggae Party</p>
          <p className='text-md md:text-2xl'>Discover a rich and eclectic<br/>program in an idyllic setting</p>
          <div className='flex gap-3 mt-5'>
            <Button textColor='text-primary' bgColor='bg-warning'>Tickets</Button>
            <Button textColor='text-black' bgColor='bg-primary'>Schedule</Button>
          </div>
        </div>
        <div className='w-xl hidden sm:flex sm:w-sm justify-center'>
            <img src={HeroImage} alt="" />
        </div>
    </div>
  )
}

export default HeroSection