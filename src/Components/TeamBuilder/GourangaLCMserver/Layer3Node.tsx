import React, { MouseEventHandler, useState } from "react";
import {
  Handle,
  NodeProps,
  Position,
  useReactFlow,
  NodeToolbar,
} from "reactflow";

import styles from "./styles.module.css";

type GetLabelParams = {
  expanded: boolean;
  expandable: boolean;
};

// this function returns the label for the node based on the current state
function getLabel({ expanded, expandable }: GetLabelParams): string {
  if (!expandable) {
    // return "nothing in this Server";
    return "";
  }

  return expanded ? "Click to collapse ▲" : "Click to expand ▼";
}

export default function CustomNode({ data, id, xPos, yPos }: NodeProps) {
  // const { addNodes, addEdges } = useReactFlow();

  // const addChildNode: MouseEventHandler = (evt) => {
  //   // prevent the expand/collapse behaviour when a new node is added while the
  //   // node is expanded
  //   if (data.expanded) {
  //     evt.preventDefault();
  //     evt.stopPropagation();
  //   }

  //   const newNodeId = `${id}__${new Date().getTime()}`;
  //   console.log(newNodeId);

  //   // the edge between the clicked node and the child node is created
  //   addNodes({ id: newNodeId, position: { x: xPos, y: yPos + 100 }, data: { label: 'X' } });
  //   addEdges({ id: `${id}->${newNodeId}`, source: id, target: newNodeId });
  // };

  // based on the state of the node, we show the label accordingly
  const label = getLabel(data);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleLaunchClick = (serverName: any, serverData: any) => {
    console.log(`>>>>>>    LAUNCHED ${serverName} server    <<<<<<`);

    console.log("Server Data for the node you clicked",serverData);
  };

  const handleTerminateClick = (serverName: any, serverData: any) => {
    console.log(`>>>>>>    TERMINATED ${serverName} server    <<<<<<`);

    console.log("Server Data for the node you clicked",serverData);
  };

  const handleRelaunchClick = (serverName: any, serverData: any) => {
    console.log(`>>>>>>    RE-LAUNCHED ${serverName} server    <<<<<<`);

    console.log("Server Data for the node you clicked",serverData);
  };

  // const togglePopup = () => {
  //   setPopupVisible(!isPopupVisible);
  // };

  const nodeName: any = data.nodeName;
  const nodeServerData: any = data.serverData;
  // const nodeName: any = "Dummy server";
  // console.log("##### Nodename value: ", nodeName);

  var borderColor: any;
  if(nodeServerData.InstanceStatus=="down"){
    borderColor = "red";
  }
  else if(nodeServerData.InstanceStatus=="running"){
    borderColor = "green";
  }
  else{
    borderColor = "orange";
  }


  return (
    <div className={styles.serverNode} style={{ border: `2px solid ${borderColor}` }}>
      <div className={styles.serverHeading}> 
      <div className={styles.serverDNSname}>{data.nodeName}</div>
      </div>
      
        
      
        {/* <p style={{margin:0, padding:0, fontSize:'10px'}}> Click for More</p> */}
        <div>
        <button className={styles.launch} 
        onClick={() => handleLaunchClick(nodeName, nodeServerData)}> Launch </button>

        <button className={styles.terminate}
        onClick={() => handleTerminateClick(nodeName, nodeServerData)}> Terminate </button>

        <button className={styles.reLaunch}
        onClick={() => handleRelaunchClick(nodeName, nodeServerData)}> Re-Launch </button>

        </div>
      {/* <div>
          <NodeToolbar className={styles.Buttons} isVisible={isPopupVisible} position={Position.Bottom}>
            <button className={styles.start}> Start </button>
            <button className={styles.launch}> Launch </button>
            <button className={styles.terminate}> Terminate </button>
            <button className={styles.state}> State </button>
          </NodeToolbar>
        </div> */}
      
      {/* <div className={styles.label}>{label}</div> */}
      <Handle position={Position.Top} type="target" />
      {/* <Handle position={Position.Bottom} type="source" /> */}
      {/* <div className={styles.button} onClick={addChildNode}>
        + add child node
      </div> */}
    </div>
  );
}
