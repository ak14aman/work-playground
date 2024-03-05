import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

import ColorChangerNode from './ColorChangerNode';
import ChangedNode from './ChangedNode';
import TextUpdaterNode from './FormNode';

import './index.css';

// const frameInfo = window.frameElement;
// const clientid = frameInfo.dataset.clientid;
// const client = window.top.botStore.getClientByID(clientid);
// const currentContext = JSON.parse(client.CurrentContext);

// console.log('Hello before current context');
// console.log(currentContext);
// console.log('After this should be role:');
// console.log(currentContext.GrantRightR);
// console.log('Hello after current context');


var initBgColor = '#ff8c66';
// var initBgColor;

// (currentContext.GrantRightR==='admin') ? initBgColor = '#85b4ff' : initBgColor = '#63ea61';

// if(currentContext.GrantRightR==='admin') {
//   initBgColor = '#85b4ff'; // Blue Shade
// }
// else if (currentContext.GrantRightR==='owner') {
//   initBgColor = '#63ea61'; //Green Shade
// }
// else {
//   initBgColor = '#f7d65e'; // yellow shade
// }

//const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorChangerNode,
  newColorNode: ChangedNode,
  formNode: TextUpdaterNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 0.5 };

const NodeChanger = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [bgColor, setBgColor] = useState(initBgColor);
  
    useEffect(() => {
      const onChange = (event) => {
        setNodes((nds) =>
          nds.map((node) => {
            if (node.type === 'newColorNode') {
              //return node;
            }
  
            const color = event.target.value;
  
            setBgColor(color);
  
            return {
              ...node,
              data: {
                ...node.data,
                color,
              },
            };
          })
        );
      };

        
      
  
      setNodes([
        {
          id: '1',
          type: 'input',
          data: { label: 'An input node' },
          position: { x: 300, y: 0 },
          sourcePosition: 'bottom',
        },
        {
          id: '2',
          type: 'selectorNode',
          data: { onChange: onChange, color: initBgColor },
          position: { x: 300, y: 100 },
        },
        {
          id: '3',
          type: 'output',
          data: { label: 'Output A' },
        //   style: { backgroundColor: bgColor },
          position: { x: 650, y: 25 },
          targetPosition: 'top',
        },
        {
          id: '4',
          type: 'newColorNode',
          data: { color: bgColor },
          style: { backgroundColor: bgColor },
          position: { x: 550, y: 100 },
          targetPosition: 'top',
        },
        // {
        //     id: '5',
        //     type: 'formNode',
        //     data: { title: "Basic Form inside a Node" },
        //     position: { x: 650, y: 150 },
        //     targetPosition: 'top',
        //   },
      ]);
  
      setEdges([
        {
          id: 'e1-2',
          source: '1',
          target: '2',
          animated: true,
          style: { stroke: '#999' },
        },
        {
          id: 'e2-3',
          source: '2',
          target: '3',
          //sourceHandle: 'a',
          animated: true,
          style: { stroke: '#999' },
        },
        {
          id: 'e2b-4',
          source: '2',
          target: '4',
          //sourceHandle: 'b',
          animated: true,
          style: { stroke: '#999' },
        },
      ]);
    }, []);

    // useEffect(() => {
    // setNodes((nds) =>
    //       nds.map((node) => {
    //         if (node.id === '3') {
    //           // it's important that you create a new object here
    //           // in order to notify react flow about the change
    //         //   node.style = { ...node.style, backgroundColor: bgColor };
    //           return {
    //             ...node,
    //             data: {
    //               ...node.data,
    //               bgColor,
    //             },
    //           };
    //         }
    
    //         return node;
    //       })
    //     );
    // }, []);
  
    // const onConnect = useCallback(
    //   (params) =>
    //     setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
    //   []
    // );

    const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#999' } }, eds)), []);


    return (
        <div style={{ width: '90vw', height: '90vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: initBgColor }}
        nodeTypes={nodeTypes}
        //connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'selectorNode') return bgColor;
            if (n.type === 'output') return '#ff0072';
          }}
          nodeColor={(n) => {
            if (n.type === 'selectorNode') return bgColor;
            return '#fff';
          }}
        />
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      </div>
    );
  };

export default NodeChanger;
