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

  const handleLaunchClick = (action: any) => {
    console.log(`>>>>>>    LAUNCHED ${action} server    <<<<<<`);
  };

  const handleTerminateClick = (action: any) => {
    console.log(`>>>>>>    TERMINATED ${action} server    <<<<<<`);
  };

  const handleRelaunchClick = (action: any) => {
    console.log(`>>>>>>    RE-LAUNCHED ${action} server    <<<<<<`);
  };

  // const togglePopup = () => {
  //   setPopupVisible(!isPopupVisible);
  // };

  const nodeName: any = data.nodeName;
  // const nodeName: any = "Dummy server";
  // console.log("##### Nodename value: ", nodeName);


  return (
    <div className={styles.serverNode}>
      <div className={styles.serverHeading}> <strong>PublicDnsName:</strong> 
      <div className={styles.serverDNSname}>{data.nodeName}</div>
      </div>
      
        
      
        {/* <p style={{margin:0, padding:0, fontSize:'10px'}}> Click for More</p> */}
        <div>
        <button className={styles.launch} style={{backgroundColor: '#11c914'}}
        onClick={() => handleLaunchClick(nodeName)}> Launch </button>

        <button className={styles.terminate} style={{backgroundColor: 'red'}}
        onClick={() => handleTerminateClick(nodeName)}> Terminate </button>

        <button className={styles.reLaunch} style={{backgroundColor: 'rgb(27, 170, 213)'}}
        onClick={() => handleRelaunchClick(nodeName)}> Re-Launch </button>

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
