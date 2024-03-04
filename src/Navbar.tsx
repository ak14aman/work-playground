import React from 'react'
import { Link } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='ComponentDiv'>
            <Link to="/">Component1</Link>
        </div>
        <div className='ComponentDiv'>
            <Link to="/Component2">Component2</Link>
        </div>
        <div className='ComponentDiv'>
            <Link to="/Component3">Component3</Link>
        </div>
        </div>
  )
}

export default Navbar
