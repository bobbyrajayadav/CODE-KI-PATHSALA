import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'

function Header() {
    const navigate = useNavigate()

    function handleSignUp(){
        navigate('/sign-up')
    }
    function handleLogin(){
        navigate('/login')
    }
    
  return (
    <div className='flex justify-between items-center px-4 pt-4'>
      <h1 className='text-2xl font-bold'>Code Ki PathShala</h1>
      <div className='flex gap-10'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
      <div className='flex gap-3'>
        <Button text="Sign Up" handleClick={handleSignUp} />
        <Button text="Login" handleClick={handleLogin} />
      </div>
    </div>
  )
}

export default Header