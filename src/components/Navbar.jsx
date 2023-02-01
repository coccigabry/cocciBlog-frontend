import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link className='link' to='/'>
            Cocci Blog
          </Link>
        </div>
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
          <span>Cocci</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar