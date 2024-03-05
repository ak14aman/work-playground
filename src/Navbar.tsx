import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';
import MobileView from './MobileView';


// const MobileView = () => {
//     return (
//       <div className='desktop-warning'>
//         Kindly open in desktop!
//       </div>
//     );
//   };


  const DesktopView = () => {
    const location = useLocation();

    return (
        <div className='navbar'>
            <div className='ComponentDiv'>
                {/* <Link to="/">Component1</Link> */}
                <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>Component1</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component2">Component2</Link> */}
                <Link to="/Component2" className={location.pathname === '/Component2' ? 'selected' : ''}>Component2</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/Component3" className={location.pathname === '/Component3' ? 'selected' : ''}>Component3</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/WhiteBoard" className={location.pathname === '/WhiteBoard' ? 'selected' : ''}>WhiteBoard</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/TeamBuilder" className={location.pathname === '/TeamBuilder' ? 'selected' : ''}>Team-Builder</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/WorkFlow" className={location.pathname === '/WorkFlow' ? 'selected' : ''}>Work-Flow</Link>
            </div>
        </div>
    );
  };





const Navbar = () => {

    // const location = useLocation();

    const isMobile = window.innerWidth <= 768;

    return (
        <div>
            {isMobile ? <MobileView /> : <DesktopView />}
        </div>
    )
}

export default Navbar
