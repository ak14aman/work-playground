import React, { useState, useEffect } from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const TldrawBoard = () => {

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
    <main>
        {/* <div className=''>
        Collaborative Whiteboard with persistence testing
        </div> */}

        <div className="tldraw__editor" style={{ maxWidth: '100%', height: editorHeight }}>
			<Tldraw persistenceKey="example" />
		</div>

    </main>
  )
}

export default TldrawBoard
