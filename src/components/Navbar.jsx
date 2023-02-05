import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { AuthContext } from '../context/context'


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)

  const user = currentUser?.other


  return (
    <div className='navbar'>
      <div className='container'>
        <div className="left">
          <div className='logo'>
            <Link className='link' to='/'>
              <img src={Logo} />
            </Link>
          </div>
        </div>
        <div className="center">
          <div className='links'>
            <Link className='link' to='/?cat=art'>
              <h6>ART</h6>
            </Link>
            <Link className='link' to='/?cat=tech'>
              <h6>TECH</h6>
            </Link>
            <Link className='link' to='/?cat=design'>
              <h6>DESIGN</h6>
            </Link>
            <Link className='link' to='/?cat=food'>
              <h6>FOOD</h6>
            </Link>
            <Link className='link' to='/?cat=travel'>
              <h6>TRAVEL</h6>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className='links'>
            {
              currentUser ? (
                <>
                  <span>Hi, {user.username}!</span>
                  <span onClick={logout}>Logout</span>
                  <span className='write'>
                    <Link className='link' to='/write'>Write</Link>
                  </span>
                </>
              ) : (
                <>
                  <Link className='link' to='/login'>
                    <span>Login</span>
                  </Link>
                  <Link className='link' to='/register'>
                    <span>Register</span>
                  </Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar