import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import './index.css';


function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} /> 
      <div className='formTitle'>Basic Form inside a Node</div>
      <div>
        <label htmlFor="text">Enter Name:</label> 
        <input id="text" name="text" onChange={onChange} className="nodrag" placeholder="John Doe" />
      </div>
      <div>
        <label htmlFor="email">Enter Email:</label>
        <input id="email" name="text" onChange={onChange} className="nodrag" placeholder="john@example.com" />
      </div>
      <div>
        <label htmlFor="password">Enter Password:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" placeholder="password?" />
      </div>
      <button>Submit</button>

      <Handle type="source" position={Position.Bottom} id="a" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
