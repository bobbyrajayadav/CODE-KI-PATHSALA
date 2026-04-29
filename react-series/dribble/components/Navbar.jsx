import React from 'react'
import Button from './button'
import { RiArrowDownSLine } from '@remixicon/react'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 font-semibold'>
        <div className='flex'>
        <div className='flex gap-15 items-center'>
            <h2 className='text-4xl'>Dribble</h2>
            <nav>
                <ul className='flex justify-between items-center gap-8 text-lg'>
                    <li className='flex items-center gap-1'>Explore <RiArrowDownSLine size={16} color="rgba(0,0,0,1)" /></li>
                    <li className='flex items-center gap-1'>Hire Talent <RiArrowDownSLine size={16} color="rgba(0,0,0,1)" /></li>
                    <li className='flex items-center gap-1'>Get Hired <RiArrowDownSLine size={16} color="rgba(0,0,0,1)" /></li>
                    <li className='flex items-center gap-1'>Community <RiArrowDownSLine size={16} color="rgba(0,0,0,1)" /></li>
                </ul>
            </nav>
            </div>
        </div>
        <div className='flex justify-between items-center gap-5'>
            <div>Sign up</div>
            <Button/>
        </div>
        
    </div>
  )
}3

export default Navbar