import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Component1 from './Components/testComp/Component1';
import Component2 from './Components/testComp/Component2';
import Component3 from './Components/testComp/Component3';
import MobileView from './MobileView';
import TldrawBoard from './Components/WhiteBoardTldraw/TldrawBoard';
import ExpandCollapseNode from './Components/TeamBuilder/ExpandCollapseNode/App';
import NodeWorkFlow from './Components/WorkFlow/NodeWorkFlow';

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
  }, []);

  return (
    <>
      {/* {!isMobileView && <Navbar />} */}
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
              <Route path="/TeamBuilder" element={<ExpandCollapseNode />} />
              <Route path="/WorkFlow" element={<NodeWorkFlow />} />
            </>
            )}
            
          </Routes>
      </div>
    </>
  );
}

export default App;

// homepage
// whiteboard ************************
// team builder reactflow
// workflow 
// multiple to do lists (reactflow)
// google calendar
// task management