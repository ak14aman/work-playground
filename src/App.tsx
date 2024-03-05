import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Component1 from './Components/testComp/Component1';
import Component2 from './Components/testComp/Component2';
import Component3 from './Components/testComp/Component3';
import MobileView from './MobileView';
import TldrawBoard from './Components/WhiteBoardTldraw/TldrawBoard';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <>
      {/* {!isMobileView && <Navbar />} */}
      {/* <TldrawBoard/> */}
      <Navbar />
        <div>
          <Routes>        
          {isMobile ? (
            <Route path="/MobileView" element={<MobileView />} />
            ) : (
            <>
              <Route path="/" element={<Component1/>} />
              <Route path="/Component2" element={<Component2 />} />
              <Route path="/Component3" element={<Component3 />} />
              <Route path="/WhiteBoard" element={<TldrawBoard />} />
            </>
            )}
            
          </Routes>
      </div>
    </>
  );
}

export default App;
