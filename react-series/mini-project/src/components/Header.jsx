import React, { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { Dukaan } from '../App';

function Header() {

  let {cart} = useContext(Dukaan);

  
  
  return (
    <div className='flex items-center justify-between px-4 py-2'>
        <h1 className='text-purple-700 font-black text-xl'>E-commerce</h1>
        <nav className='flex gap-3'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </nav>
        <div className='flex gap-3 items-center font-semibold'>
            <p className='font-bold '>CART : {cart.length}</p>
            <Button text={'Login'}/>
        <Button text={'Sign Up'}/>
        </div>
    </div>
  )
}

export default Header