import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h1 className='text-purple-600 text-3xl font-bold'>E-commerce</h1>
        </div>
        <div className='flex gap-4'>
            <Link to='/' className='text-lg hover:text-purple-600 font-bold cursor-pointer'>Home</Link>
            <Link to='/about' className='text-lg hover:text-purple-600 font-bold cursor-pointer'>About</Link>
            <Link to='/contact' className='text-lg hover:text-purple-600 font-bold cursor-pointer'>Contact</Link>
        </div>
        <div className='flex gap-2'>
            <Button text="Login"/>
            <Button text="Sign Up"/>
        </div>
    </div>
  )
}

export default Navbar