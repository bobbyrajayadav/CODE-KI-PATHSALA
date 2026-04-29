import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Products from './Products'

function Home() {
  return (
    <div className='px-8 mt-4'>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default Home