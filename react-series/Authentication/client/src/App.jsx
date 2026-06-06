import React from 'react'

function App() {
  return (
    <div className='container'>
      <div className='box'>
        <h2 className='heading'>SignUp Form</h2>
      <form className='signup'>
        <label>Name </label>
        <input type="text" placeholder='Enter name'/>
        <label>Email </label>
        <input type="text" placeholder='Enter email'/>
        <label>Password </label>
        <input type="text" placeholder='Enter password'/>
      </form>

      <button>Sign Up</button>
      </div>
    </div>
  )
}

export default App