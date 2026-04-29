import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div className='px-8 mt-4'>
      <Navbar/>
      <div className='flex justify-center items-center h-[80vh]'>
        <h1 className='text-3xl font-bold'>About Page</h1>
      </div>
    </div>
  )
}

export default About