import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/context'


const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs(
      prev => ({
        ...prev,
        [e.target.name]: e.target.value
      })
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')
    } catch (err) {
      setErr(err.response.data)
    }
  }


  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' name='username' placeholder='username' onChange={handleChange} />
        <input type='password' name='password' placeholder='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Not yet a member? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login