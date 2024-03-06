import React, { useEffect, useCallback, useState, MouseEvent } from 'react';
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

import  CustomLayerNode from './CustomNode'
import HeaderNode from './HeaderNode';
import Layer3Node from './Layer3Node';

// import { nodes as initialNodes, edges as initialEdges } from './initialElements';
import useAnimatedNodes from './useAnimatedNodes';
import useExpandCollapse from './useExpandCollapse';

import 'reactflow/dist/style.css';
import styles from './styles.module.css';

const proOptions = { account: 'paid-pro', hideAttribution: true };

const nodeTypes = {
  headerNode : HeaderNode,
  layerCustomNode: CustomLayerNode,
  layer3Node: Layer3Node,
};

type ExpandCollapseExampleProps = {
  treeWidth?: number;
  treeHeight?: number;
  animationDuration?: number;
};






function ReactFlowPro({ treeWidth = 220, treeHeight = 100, animationDuration = 300 }: ExpandCollapseExampleProps = {}) {

  const [layer2Node, setLayer2Node] = useState<any[]>([]);
  const [server3Nodes, setServer3Nodes] = useState<any[]>([]);



  const setServerNodes = ( layer2: any [] ) => {  //layer2Node is passed here

    setNodes((cNode)=> {

      cNode.forEach((node2)=> {
        if( node2.data && node2.data.layer && node2.data.layer == "layer")
        {
          layer2.forEach((node3)=>{
          if(node3.Layer == node2.data.nodeName)
          {
              const newNode= {
              id: node3.ServerOID,
              type: "layer3Node", 
              data: { nodeName: node3.DisplayName, layer: 'server', layerID: node2.id, serverData: node3, expanded: false },
              position: { x: 0, y: 0 },
            }

            setServer3Nodes((cNode)=>{
                let index = cNode.findIndex((lnodes) => lnodes.id == newNode.id);
                if(index == -1) {
                  return [...cNode, newNode];
                } else {
                  return cNode;
                }
            });
          }

    
          })
        }
      })
      return cNode;
    })
    // let tempNode: any = [];
    // let tempEdges: any = [];
    // setNodes((cNode)=>{
    //   cNode.forEach((node2) => {
    //     if( node2.data && node2.data.layer && node2.data.layer == "layer")
    //     {
    //       layer2.forEach((node3)=>{
    //         if(node3.Layer == node2.data.nodeName)
    //         {
    //         const newNode= {
    //           id: node3.ServerOID,
    //           type: "layerCustomNode", 
    //           data: { nodeName: node3.DisplayName, layer: 'server', expanded: false },
    //           position: { x: 0, y: 0 },
    //         }
  
    //         tempNode.push(newNode);
  
    //         const newEdge= {
    //           id: `elayer-${node3.ServerOID}`,
    //           source: node2.id,
    //           target: node3.ServerOID,
    //         }
  
    //         tempEdges.push(newEdge);

    //       }
  
    //       })
    //     }
    //   })

    //   return cNode;
    // })

    // console.log(">>>>>      temp layer 3 Current nodes after server nodes", JSON.stringify(tempNode));
    // console.log(">>>>>      temp layer 3 Current edges", JSON.stringify(tempEdges));
  
    // tempNode.forEach((tNode : any)=> {
    //   console.log(">>>>>      tnodes inside foreach", tNode);
    //   setNodes((cNode)=> {
    //     let index = cNode.findIndex((lnodes) => lnodes.id == tNode.id);
    //     if(index == -1) {
    //       return [...cNode, tNode];
    //     } else {
    //       return cNode;
    //     }
    //   })



    //   setEdges((cEdge) => {
    //     let index = cEdge.findIndex((lEdge) => lEdge.target == tNode.id);
    //     if(index == -1 ) {
    //       let edgeIndex = tempEdges.findIndex((tEdge: any) => tEdge.target == tNode.id);
    //       return [...cEdge, tempEdges[edgeIndex]];
    //     } else {
    //       return cEdge;
    //     }
    //   });

    // })

    // console.log(">>>>>      foreach layer 3 Current nodes after server nodes", nodes);
    // console.log(">>>>>      foreach layer 3 Current edges", edges);
    
    // setNodes((cNode)=>{
    //   const existingNodeIds = new Set(cNode.map((node) => node.id));
    //   const newNodes = tempNode.filter((nodeItems: any)=> !existingNodeIds.has(nodeItems.id))
    //   console.log("New node data: ", newNodes);
    //   return [...cNode, newNodes];

    //   // let index = cNode.findIndex((lnodes) => lnodes.id == tempNode.id);
    //   // if(index == -1) {
    //   //   return [...cNode, tempNode];
    //   // } else {
    //   //   return cNode;
    //   // }
    // })

  
    // setEdges((cEdge)=>{
    //   const existingEdgeIds = new Set(cEdge.map((edge) => edge.id));
    //   const newEdges = tempEdges.filter((EdgeItems: any)=> !existingEdgeIds.has(EdgeItems.id))

    //   return [...cEdge, newEdges];

    //   // let index = cEdge.findIndex((lnodes) => lnodes.id == tempEdges.id);
    //   // if(index == -1) {
    //   //   return [...cEdge, tempEdges];
    //   // } else {
    //   //   return cEdge;
    //   // }
    // })



    // console.log(">>>>>      layer 3 Current nodes after server nodes", nodes);
    // console.log(">>>>>      layer 3 Current edges", edges);

  }
  
  useEffect(() => {
    console.log("Test Server3Node: ", server3Nodes);

    server3Nodes.forEach((s3Node)=> {
      setNodes((cNode) => {
        let index = cNode.findIndex((lnodes) => lnodes.id == s3Node.id);
        if(index == -1) {
          return [...cNode, s3Node];
        } else {
          return cNode;
        }

      });

      const newEdge= {
        id: `eserver-${s3Node.id}`,
        source: s3Node.data.layerID,
        target: s3Node.id,
      }

      setEdges((cEdge)=> {
        let index = cEdge.findIndex((lnodes) => lnodes.source == s3Node.id);
        if(index == -1) {
          return [...cEdge, newEdge];
        } else {
          return cEdge;
        }

      })
    })


    console.log(">>>>>      layer 3 Current nodes after server nodes", nodes);
    console.log(">>>>>      layer 3 Current edges", edges);

  }, [server3Nodes])



//   const rootNode ={
//     id: 'rootNode',
//     position: { x: 0, y: 0 },
//     data: { expanded: true },
// }

  useEffect(()=>{
    // console.log("@@@   Current layer2Node", layer2Node);

    layer2Node.forEach((currentNode)=> {
      if(currentNode.Layer != 'Developing') 
      {

      const newNode= {
        id: currentNode.LBSetID,
        type: "layerCustomNode", 
        data: { nodeName: currentNode.Layer, layer: 'layer', expanded: false },
        position: { x: 0, y: 0 },
      }
      // setNodes((cNode : any)=>cNode.concat(newNode));
      setNodes((cNode) => {
        let index = cNode.findIndex((lnodes) => lnodes.data.nodeName == newNode.data.nodeName);
        if(index == -1) {
          return [...cNode, newNode];
        } else {
          return cNode;
        }


      });

      console.log("@@@   Current nodes after layer nodes", nodes);



      const newEdge= {
        id: `eRoot-${currentNode.LBSetID}`,
        source: 'rootNode',
        target: currentNode.LBSetID,
      }

      // setEdges((cEdge : any)=>cEdge.concat(newEdge));
      setEdges((cEdge) => {
        let index = cEdge.findIndex((lnodes) => lnodes.id == newEdge.id);
        if(index == -1) {
          return [...cEdge, newEdge];
        } else {
          return cEdge;
        }


      });
    
      setServerNodes(layer2Node);

    }
    })


    console.log("@@@   Current nodes after server nodes", nodes);
    console.log("@@@   Current edges", edges);


  }, [layer2Node]); // gets called everytime layer2Node changes


  // console.log("@@@    My layer2Node is ", layer2Node);  // IMP Needed for debugging, gives all the servers after filtering.


  
//@@@@@@@@@@@@@
  const rootNode ={
      id: 'rootNode',
      type: 'headerNode',
      position: { x: 0, y: 0 },
      data: { nodeName: "LCM", layer: 'root', expanded: true },
      // data: { nodeName: "LCM", expanded: true },
  }




  const initialNodes = [rootNode];

  const initialEdges : any = [];

  // console.log("%%%%%%%%%%     check out initial elements edges structure", initialEdges);













  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const { nodes: visibleNodes, edges: visibleEdges } = useExpandCollapse(nodes, edges, { treeWidth, treeHeight });
  const { nodes: animatedNodes } = useAnimatedNodes(visibleNodes, { animationDuration });
  
  const onNodesChange: OnNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange: OnEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  // console.log("@ >>>      Current nodes", nodes);  // IMP Needed for debugging, gives final nodes & edges
  // console.log("@ >>>      Current edges", edges);  // IMP Needed for debugging, gives final nodes & edges

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

  return (
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
      <Background color="#ffffff"/>
      {/* <MiniMap /> */}
      <Controls></Controls>
    </ReactFlow>
  );
}

function Flow(props: ExpandCollapseExampleProps) {
  return <div style={{height:'100vh', width:'100vw'}}>
    <ReactFlowProvider>
      <ReactFlowPro {...props} />
    </ReactFlowProvider>
    </div>
}

export default Flow;
