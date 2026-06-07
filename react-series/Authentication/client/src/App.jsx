import React from 'react'

function App() {

  return (
    <div className='container'>
      <div className='box'>
        <h2 className='heading'>SignUp Form</h2>
      <form className='signup'>
        <label>First Name </label>
        <input type="text" placeholder='first name'/>
        <label>Last Name </label>
        <input type="text" placeholder='last name'/>
        <label>Username</label>
        <input type="text" placeholder='username'/>
        <label>Email </label>
        <input type="text" placeholder='email'/>
        <label>Password </label>
        <input type="text" placeholder='password'/>
      </form>

      <button>Sign Up</button>
      </div>
    </div>
  )
}

export default App