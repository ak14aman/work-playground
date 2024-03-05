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
      {/* <div className='formTitle'>Basic Form inside a Node</div> */}
      <div>
        <label htmlFor="text">Enter Work/Name:</label> 
        <input id="text" name="text" onChange={onChange} className="nodrag" placeholder="Type here.." />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
