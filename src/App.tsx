import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Components/HmepageComp/Homepage';
import MobileView from './Components/HmepageComp/MobileView';
import TldrawBoard from './Components/WhiteBoardTldraw/TldrawBoard';
import ExpandCollapseNode from './Components/TeamBuilder/ExpandCollapseNode/App';
import NodeWorkFlow from './Components/WorkFlow/NodeWorkFlow';
import IndexToDo from './Components/MultiToDo/IndexToDo';
import IndexCalendar from './Components/CalendarEvents/IndexCalendar';
import TaskManager from './Components/TaskManagement/TaskManager';

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
              <Route path="/" element={<Homepage/>} />
              <Route path="/WhiteBoard" element={<TldrawBoard />} />
              <Route path="/TeamBuilder" element={<ExpandCollapseNode />} />
              <Route path="/WorkFlow" element={<NodeWorkFlow />} />
              <Route path="/ToDoList" element={<IndexToDo />} />
              <Route path="/Calendar" element={<IndexCalendar />} />
              <Route path="/TaskManager" element={<TaskManager />} />
            </>
            )}
            
          </Routes>
      </div>
    </>
  );
}

export default App;

// @@ homepage
// @@ whiteboard ************************
// @@ team builder reactflow
// @@ workflow ********************
// @@ multiple to do lists (reactflow)
// @@ google calendar *******************
// @@ task management
// @@ mobile view oops