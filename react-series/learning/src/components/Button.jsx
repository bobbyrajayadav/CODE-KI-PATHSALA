import React from 'react'

function Button({ text , handleClick }) {
    return (
        <button onClick={handleClick} className="px-6 py-3 bg-black text-white rounded font-bold "> 
            {text}
        </button>

    )
}

export default Button