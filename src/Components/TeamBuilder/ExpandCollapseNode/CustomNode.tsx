import React, { MouseEventHandler, useState } from 'react';
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';

import styles from './styles.module.css';

type GetLabelParams = {
  expanded: boolean;
  expandable: boolean;
};

// this function returns the label for the node based on the current state
function getLabel({ expanded, expandable }: GetLabelParams): string {
  if (!expandable) {
    return 'nothing to expand';
  }

  return expanded ? 'Click to collapse ▲' : 'Click to expand ▼';
}

export default function CustomNode({ data, id, xPos, yPos }: NodeProps) {


  const [showTeam, setShowTeam] = useState<boolean>(false);
  const [showMember, setShowMember] = useState<boolean>(false);
  const [teamOrMember, setteamOrMember ] = useState<string>("");

  const handleTeamClick = () => {
    setShowTeam(true);
    setteamOrMember("Team");
    setShowMember(false);
  };

  const handleMemberClick = () => {
    setShowMember(true);
    setteamOrMember("Member");
    setShowTeam(false);
  };



  const [ oldNodeId, setOldNodeId ] = useState<string>("A");
  // const [ oldEdge, setOldEdge ] = useState<string>("");
  const { addNodes, addEdges, setNodes, getNodes } = useReactFlow();

  const addChildNode: MouseEventHandler = (evt) => {
    // prevent the expand/collapse behaviour when a new node is added while the
    // node is expanded
    if (data.expanded) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    const newNodeId = `${id}__${new Date().getTime()}`;

    // the edge between the clicked node and the child node is created
    addNodes({ id: newNodeId, position: { x: xPos, y: yPos + 100 }, data: { label: 'Team/Member Name' } });
    addEdges({ id: `${id}->${newNodeId}`, source: id, target: newNodeId });

    // let prevEdge = JSON.stringify({ id: `${id}->${newNodeId}`, source: id, target: newNodeId });
    setOldNodeId(newNodeId);
    // setOldEdge(prevEdge);
    console.log(">>>>>>  getnodes: ", getNodes());
    // addNodes({ id: oldNodeId, position: { x: xPos, y: yPos + 100 }, data: { label: teamOrMember } });

    // setNodes((cNode) => {
    //   let index = cNode.findIndex((lnodes) => lnodes.id == oldNodeId);
    //   if (index !== -1) {
    //     const updatedNode = {
    //       ...cNode[index],
    //       data: { label: teamOrMember } // Update the data property with newLabel
    //     };
    //     const updatedNodes = [...cNode];
    //     updatedNodes[index] = updatedNode;
    //     return updatedNodes;
    //   } else {
    //     return cNode;
    //   }


    // });

    // console.log("addEdges test   >>>>>>>>>   ", { id: `${id}->${newNodeId}`, source: id, target: newNodeId })
  };





  // based on the state of the node, we show the label accordingly
  const label = getLabel(data);
  // console.log("label data", label);

  return (
    <div className={styles.node}>
      <div>
      {!showTeam && !showMember && (
        <>
          <button className={styles.buttonSelector} onClick={handleTeamClick}>Team</button>
          <button className={styles.buttonSelector} onClick={handleMemberClick}>Member</button>
        </>
      )}

      {showTeam && <div>{teamOrMember} Name:</div>}
      {showMember && <div>{teamOrMember} Name:</div>}
    </div>

      {/* <div className={styles.labelHeading}>{data.label}</div> */}
      <div className={styles.customInputNode}>        
        <input id="text" name="text" className="nodrag" style={{ display: 'inline-block' }} placeholder="Type here.." />
      </div>
      <div className={styles.label}>{label}</div>
      <Handle position={Position.Top} type="target" />
      <Handle position={Position.Bottom} type="source" />
      <div className={styles.button} onClick={addChildNode}>
        + add node
      </div>
    </div>
  );
}
