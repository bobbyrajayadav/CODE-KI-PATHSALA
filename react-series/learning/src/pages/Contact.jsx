import React, { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'

function Contact() {

    const [count, setCount] = useState(0)

    
  return (
    <div>
        <Header />
        <h2 className='px-4 pt-10 text-3xl font-semibold'>Contact Page </h2>
        <p className='px-4 pt-4 text-lg py-4'>Count : {count}</p>
        <Button text={'Increment'} handleClick={() => {setCount(count+1)}}/>
    </div>
  )
}

export default Contact