import React from 'react'

function Button({text, handleClick}) {
  return (
    <button onClick={handleClick} className='bg-purple-700 text-white text-sm font-semibold px-6 py-2 rounded-xl'>{text}</button>
  )
}

export default Button