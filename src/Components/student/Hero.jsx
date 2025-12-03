import React from 'react'
import { assets } from '../../assets/assests';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 py-4
    px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from cyan-100/70'>
    <h1>
         Learn Anytime, Anywhere <span className='text-blue-600'> — Discover Courses That Fit Your Journey

      </span><img src={assets.hero_image} alt="Hero" className='md:block hidden absolute -bottom right-0'/> 
    </h1>

    <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>


 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos eius sunt accusamus illo iure saepe nobis ratione corporis eos voluptates, harum tenetur, dolore consequuntur quae suscipit. Cum optio natus amet?
    </p>
    <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos eius sunt accusamus illo iure saepe nobis ratione corporis eos voluptates, harum tenetur, dolore consequuntur quae suscipit. Cum optio natus amet?
    </p>


    </div>
  )
}

export default Hero