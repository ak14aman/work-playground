import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import ToDoCheckApp from '../ToDoCheck/App';

// import './indextodo.css';


function ToDoNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      {/* <Handle type="target" position={Position.Top} isConnectable={isConnectable} />  */}
      <div className='formTitle' style={{alignItems: 'center;'}}>To-Do-List</div>
      <ToDoCheckApp/>
      

      {/* <Handle type="source" position={Position.Bottom} id="a" isConnectable={isConnectable} /> */}
    </div>
  );
}

export default ToDoNode;
