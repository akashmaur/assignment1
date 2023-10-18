import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <div className='main-container'>
        <div className='header-container'>
          <div className='logo-container'>
            <h1>Restoran</h1>
          </div>
          <div className='Navbar-container'>
            <ul className="Navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header