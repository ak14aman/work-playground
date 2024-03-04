import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Component1 from './Components/testComp/Component1';
import Component2 from './Components/testComp/Component2';
import Component3 from './Components/testComp/Component3';

function App() {
  return (
    <>
      <Navbar/>
        <div>
          <Routes>        
            <Route path="/"  element={<Component1/>} />
            <Route path="/Component2"  element={<Component2 />}/>
            <Route path="/Component3"  element={<Component3 />}/>
            
          </Routes>
      </div>
    </>
  );
}

export default App;
