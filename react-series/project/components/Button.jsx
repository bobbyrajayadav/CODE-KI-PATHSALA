import React from 'react'

function Button({text , handleClick}) {
  return (
    <div>
        <button onClick={handleClick} className='bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer w-full'>
            {text}
        </button>
    </div>
  )
}

export default Button