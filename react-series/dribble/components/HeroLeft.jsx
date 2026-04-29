import React from 'react'
import Button from './button'
import { RiSearchLine } from '@remixicon/react'

function HeroLeft() {
  return (
    <div className='w-[50%]'> 
        <h2 className='text-6xl font-semibold'>Discover the <br /> World’s Top <br /> Designers</h2>
        <p className='mt-7 text-lg font-semibold'>Explore work from the most talented and accomplished<br /> designers ready to take on your next project.</p>

        <div className='flex gap-3 mt-10'>
            <Button/>
            <Button/>
            <Button/>
        </div>
        <div className='flex gap-3 py-2 px-4 w-[70%] mt-5 bg-gray-100 border border-gray-300 rounded-4xl'>
            <input className='outline-none w-full' type="text" placeholder='What type of designer are you interested in?' />
            <RiSearchLine className='bg-pink-500 rounded-full px-3 ' color='white' size={50} />
        </div>
        
        <div className='flex items-center mt-5 gap-2'>
            <h2>Popular:</h2>
            <span className='border border-gray-500 rounded-4xl py-1 px-2'>Dashboard</span>
            <span className='border border-gray-500 rounded-4xl py-1 px-2'>landing gap</span>
            <span className='border border-gray-500 rounded-4xl py-1 px-2'>e-commerce</span>
            <span className='border border-gray-500 rounded-4xl py-1 px-2'>logo</span>
        </div>
        
    </div>
  )
}

export default HeroLeft