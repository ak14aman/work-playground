import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Background,
  MiniMap,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

import './WorkFlowStyles.css'

import TextUpdaterNode from './FormNode';

const nodeTypes = {
  // selectorNode: ColorChangerNode,
  // newColorNode: ChangedNode,
  formNode: TextUpdaterNode,
};

const initialNodes = [
  {
    id: '0',
    type: 'formNode',
    data: { label: 'Node' },
    position: { x: 0, y: 50 },
  },  
];

let id = 1;
const getId = () => `${id++}`;

const NodeWorkFlow = () => {


    //Editor resizing
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



  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback(
    (params) => {
      // reset the start node on connections
      connectingNodeId.current = null;
      setEdges((eds) => addEdge(params, eds))
    },
    [],
  );

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          type: 'formNode',
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id }),
        );
      }
    },
    [screenToFlowPosition],
  );

  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ width: '100%', height: editorHeight }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      />
    {/* <Background /> */}
    <MiniMap />
    <Controls/>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <div className='shine-container'>
      <div className='shine-text'>
          How to use, you ask? <br></br>
          Create a new node by dropping the connection line on the pane from those purple boxes, and go with the flow :)
      </div>
    </div>
    
    <NodeWorkFlow/>
  </ReactFlowProvider>
);
