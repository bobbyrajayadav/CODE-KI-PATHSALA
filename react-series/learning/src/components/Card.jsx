import React from 'react'
import Button from './Button'

function Card({ title, desc }) {
    return (
        <div className=' flex flex-col gap-4 p-4 rounded bg-gray-300 w-full'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>{desc}</p>
            <Button text="Read More" />
        </div>
    )
}

export default Card