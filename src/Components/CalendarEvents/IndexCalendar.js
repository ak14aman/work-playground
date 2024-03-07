import React, { useState, useEffect } from 'react'
import App from './CalCore/App'
// import './IndexCalStyles.css'

const IndexCalendar = () => {

  const [editorHeight, setEditorHeight] = useState(window.innerHeight - 55);

  useEffect(() => {
    const handleResize = () => {
      setEditorHeight(window.innerHeight - 60);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div >
      {/* Calander app */}
      {/* <App/> */}

      <iframe
      src="https://google-calendar-clone.netlify.app/"
      title="Hosted React App"
      style={{ width: '100vw', height: '90vh' }}
    />

    </div>
  )
}

export default IndexCalendar
