import React, { useCallback, useState, useEffect,  MouseEvent } from 'react';
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlowProvider,
  MiniMap,
  Background,
  Controls,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler,
  Node,
  Edge,
} from 'reactflow';

import CustomNode from './CustomNode';

import { nodes as initialNodes, edges as initialEdges } from './initialElements';
import useAnimatedNodes from './useAnimatedNodes';
import useExpandCollapse from './useExpandCollapse';

import 'reactflow/dist/style.css';
import styles from './styles.module.css';

const proOptions = { account: 'paid-pro', hideAttribution: true };

const nodeTypes = {
  custom: CustomNode,
};

type ExpandCollapseExampleProps = {
  treeWidth?: number;
  treeHeight?: number;
  animationDuration?: number;
};

function ExpandCollapse({ treeWidth = 220, treeHeight = 100, animationDuration = 300 }: ExpandCollapseExampleProps = {}) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const { nodes: visibleNodes, edges: visibleEdges } = useExpandCollapse(nodes, edges, { treeWidth, treeHeight });
  const { nodes: animatedNodes } = useAnimatedNodes(visibleNodes, { animationDuration });

  const onNodesChange: OnNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange: OnEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);


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



  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: { ...n.data, expanded: !n.data.expanded },
            };
          }

          return n;
        })
      );
    },
    [setNodes]
  );

//   return (

//     <div className="dndflow" style={{ width: '90vw', height: '90vh' }}>
//       <ReactFlowProvider>
//         {/* <div className="reactflow-wrapper" ref={reactFlowWrapper}> */}
//           <ReactFlow
//             fitView
//             nodes={animatedNodes}
//             edges={visibleEdges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onNodeClick={onNodeClick}
//             proOptions={proOptions}
//             nodeTypes={nodeTypes}
//             nodesDraggable={false}
//             nodesConnectable={false}
//             className={styles.viewport}
//             zoomOnDoubleClick={false}
//             elementsSelectable={false}
//           >
//             <Controls />
//             <MiniMap />
//             {/* <Background variant="dots" gap={12} size={1} /> */}
//             <Background />
//           </ReactFlow>
//         {/* </div> */}
//       </ReactFlowProvider>
//     </div>

//   );
// }

return (
  <div className="dndflow" style={{ maxWidth: '100%', height: editorHeight }}>
  <ReactFlow
    fitView
    nodes={animatedNodes}
    edges={visibleEdges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onNodeClick={onNodeClick}
    proOptions={proOptions}
    nodeTypes={nodeTypes}
    nodesDraggable={false}
    nodesConnectable={false}
    className={styles.viewport}
    zoomOnDoubleClick={false}
    elementsSelectable={false}
  >
    <Background />
    <MiniMap />
  </ReactFlow>
  </div>
);
}

function ExpandCollapseNode(props: ExpandCollapseExampleProps) {
return (
  <ReactFlowProvider>
    <ExpandCollapse {...props} />
  </ReactFlowProvider>
);
}


export default ExpandCollapseNode;
