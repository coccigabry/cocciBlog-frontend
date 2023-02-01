import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' />
        <input required type='email' placeholder='email' />
        <input required type='password' placeholder='password' />
        <button>Login</button>
        <p>ERROR MESSAGE</p>
        <span>Already a member? <Link to='/login'>Sign In</Link></span>
      </form>
    </div>)
}

export default Register