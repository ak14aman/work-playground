import React, { MouseEventHandler } from 'react';
import { Handle, NodeProps, Position, useReactFlow,  } from 'reactflow';

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

export default function HeaderNode({ data, id, xPos, yPos }: NodeProps) {



  // based on the state of the node, we show the label accordingly
  const label = getLabel(data);

  return (
    <div className={styles.node}>
        <div className={styles.headerNode}>
        <div>LCM</div>
      </div>
      <div className={styles.label}>{label}</div>
      <Handle position={Position.Bottom} type="source" />
    </div>
  );
}
