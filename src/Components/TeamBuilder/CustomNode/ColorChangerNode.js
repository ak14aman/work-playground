import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

import './index.css';
const ColorChangerNode = memo(({ data, isConnectable }) => {

  return (
    <>
    <div className='color-changer-node'>
    <Handle
      type="target"
      position={Position.Top}
      style={{ background: '#555' }}
      onConnect={(params) => console.log('handle onConnect', params)}
      isConnectable={isConnectable}
    />
    <div>
      Pick Color for Output Node: <strong>{data.color}</strong>
    </div>
    <input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} />
    <Handle
      type="source"
      position={Position.Bottom}
      //id="a"
      style={{ background: '#555' }}
      isConnectable={isConnectable}
    />
    {/* <Handle
      type="source"
      position={Position.Right}
      id="b"
      style={{ bottom: 10, top: 'auto', background: '#555' }}
      isConnectable={isConnectable}
    /> */}

    </div>
  </>
  );
});

export default ColorChangerNode;
