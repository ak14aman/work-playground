import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

import './index.css';
const ChangedNode = memo(({ data, isConnectable }) => {

  return (
    <>
    <div className='new-color-node' style={{ background: data.color }}>
    <Handle
      type="target"
      position={Position.Top}
      style={{ background: '#555' }}
      onConnect={(params) => console.log('handle onConnect', params)}
      isConnectable={isConnectable}
    />
    <div>
      Output Node Color: <strong>{data.color}</strong>
    </div>
    <div style={{ fontSize: '9px'}} >
      (And hey, also a media player!)
    </div>
    <div className='video'>
            <video width="100%" height="100%" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
        </div>
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

export default ChangedNode;
