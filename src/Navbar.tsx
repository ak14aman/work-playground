import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';
import MobileView from './Components/HmepageComp/MobileView';


  const DesktopView = () => {
    const location = useLocation();

    return (
        <>
        <div className='nav-saver'></div>
        <div className='navbar'>
            <div className='ComponentDiv'>
                {/* <Link to="/">Component1</Link> */}
                <Link to="/" className={location.pathname === '/' ? 'selected' : ''}> 🏠 Home</Link>
            </div>            
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/WhiteBoard" className={location.pathname === '/WhiteBoard' ? 'selected' : ''}>WhiteBoard</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/WorkFlow" className={location.pathname === '/WorkFlow' ? 'selected' : ''}>Work-Flow</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/TeamBuilder" className={location.pathname === '/TeamBuilder' ? 'selected' : ''}>Team-Builder</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/TaskManager" className={location.pathname === '/TaskManager' ? 'selected' : ''}>Task-Manager</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/Calendar" className={location.pathname === '/Calendar' ? 'selected' : ''}>Event-Calendar</Link>
            </div>
            <div className='ComponentDiv'>
                {/* <Link to="/Component3">Component3</Link> */}
                <Link to="/ToDoList" className={location.pathname === '/ToDoList' ? 'selected' : ''}>Multi-To-Dos</Link>
            </div>

            <div className='ComponentDiv' style={{ marginLeft: 'auto'}}>
                <a href="https://ak14aman.vercel.app/" className={location.pathname === '/AboutMe' ? 'selected' : ''}>Who Me? 👀  &nbsp;&nbsp;&nbsp;&nbsp;</a>
            </div>
        </div>
        </>
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
