import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className='nav'>
        <div>
    <Link to={'/'}><img src='./pngwing.com(80).png' alt='logo' className='logo'/></Link>
        </div>
        
        <div className='list-con'>
          <Link className='list' to={"/"}>search</Link>
          </div>
      </div>
      </div>
  )
}
