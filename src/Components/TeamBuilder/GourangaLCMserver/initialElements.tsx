import { Node, Edge } from 'reactflow';
import { jsonData } from './Data.json';
const node = jsonData.nodes;

// interface NodeType {
//   InstanceId: string;
//   Layer: string;
// }



function pushUnique(arr: any[], newObj: any): void {
  const existingObj = arr.find(obj => obj.LBSetID === newObj.LBSetID);
  if (!existingObj) {
      arr.push(newObj);
  }
}


let layer2Node:any = [] ;
// let myArray:any = [];



const jsonData2 = {
  "nodes": layer2Node,
};


console.log("@@@@@@    My layer2Node is ", layer2Node);
console.log("@@@@@@    this is jsonData ");
console.log(jsonData);
console.log("@@@@@@    this is jsonData2 ");
console.log(jsonData2);

// const node = jsonData.nodes;

console.log("@@@@@@    this is jsonData node ");
console.log(jsonData.nodes);
console.log("@@@@@@    this is jsonData2 node ");
console.log(layer2Node);

console.log("@@@@@@    this is jsonData[0] node ");
console.log(jsonData.nodes[0]);
console.log("@@@@@@    this is jsonData2[0] node ");
console.log(layer2Node[0]);
console.log("@@@@@@    this is jsonData2[0] node ");
console.log(typeof(layer2Node));
console.log("@@@@@@    typeof ^ jsonData2 node ");
console.log(typeof(jsonData.nodes));
console.log("@@@@@@    typeof ^ jsonData node ");


let jsonString = JSON.stringify(layer2Node, null, 2);
console.log("Stringify try kar ke dekh raha hu layer2Node:");
console.log(jsonString);

// const node = layer2Node;

setTimeout(() => {
  // This is the code that will run after the delay
  console.log('*******   This runs after 2 seconds');

  console.log("@@@@@@    My layer2Node is ", layer2Node);
  console.log("@@@@@@    this is jsonData ");
  console.log(jsonData);
  console.log("@@@@@@    this is jsonData2 ");
  console.log(jsonData2);

  console.log("@@@@@@    this is jsonData node ");
  console.log(jsonData.nodes);
  console.log("@@@@@@    this is jsonData2 node ");
  console.log(layer2Node);

  console.log("@@@@@@    this is jsonData[0] node ");
  console.log(jsonData.nodes[0]);
  console.log("@@@@@@    this is jsonData2[0] node ");
  console.log(layer2Node[0]);

}, 2000);



// setTimeout(() => {
//   // This is the code that will run after the delay
//   console.log('*******   This runs after 2 seconds');


// }, 2000);



setTimeout(() => {
  // This is the code that will run after the delay
  console.log('*******   This runs after 2 seconds root node');


}, 2000);

// Assigning the nodes and edges from elements data

const rootNode ={
    id: 'A',
    type: "header",
    position: { x: 0, y: 0 },
    data: { nodeName: 'LCM', expanded: true },
}


 const nodesWithoutRoot:Node[] = node.map((n: any) => ({
  id: n.InstanceId,
  type: "custom",
  data: { nodeName: n.Layer, expanded: false },
  position: { x: 0, y: 0 },
}));

// const nodesWithoutRoot:Node[] = node.map((n) => ({
//   id: n.id,
//   data: { nodeName: n.name, expanded: false },
//   position: { x: 0, y: 0 },
// }));



// const layer3Node ={
//   id: 'B',
//   position: { x: 0, y: 0 },
//   data: { expanded: true },
// };

// export const nodes = [rootNode, ...nodesWithoutRoot, layer3Node];
export const nodes = [rootNode, ...nodesWithoutRoot];

console.log("%%%%%%%%%%     check out initial elements node structure", nodes);

export const edge:Edge[]=node.map((n: any)=>({
  id: `eA-${n.InstanceId}`,
  source: 'A',
  target: n.InstanceId,
}));

// export const edge:Edge[]=node.map((n)=>({
//   id: `eA-${n.id}`,
//   source: 'A',
//   target: n.id,
// }));


// const edgeLayer3 = {
//   id: 'eA1-B',
//   source: 'i-075379289b9c7b354',
//   // source: '088c0fd5-44d0-42f3-81d3-827cc639a9d2',
//   target: 'B'
// }

// export const edges = [...edge, edgeLayer3];
export const edges = [...edge];

console.log("%%%%%%%%%%     check out initial elements edges structure", edges);















// export const nodes: Node[] = [
//   {
//     id: 'A',
//     position: { x: 0, y: 0 },
//     data: {    expanded: true },
//   },
//   {
//     id: 'B',
//     position: { x: 0, y: 0 },
//     data: { nodeName: 'Developement', expanded: false },
//   },
//   {
//     id: 'C',
//     position: { x: 0, y: 0 },
//     data: {  nodeName: 'Production',  expanded: false },
//   },
//   {
//     id: 'D',
//     position: { x: 0, y: 0 },
//     data: {  nodeName: 'Testing', expanded: false },
//   },
//   {
//     id: 'E',
//     position: { x: 0, y: 0 },
//     data: { expanded: true },
//   },
//   {
//     id: 'F',
//     position: { x: 0, y: 0 },
//     data: { expanded: false },
//   },
//   {
//     id: 'G',
//     position: { x: 0, y: 0 },
//     data: { expanded: false },
//   },
//   {
//     id: 'H',
//     position: { x: 0, y: 0 },
//     data: { expanded: false },
//   },
//   {
//     id: "I",
//     position: {x: 0, y: 0},
//     data:{expanded: false},
//   },
//   {
//     id: "J",
//     position: { x : 0, y: 0},
//     data: { expanded: false},
//   },
//   {
//     id: 'K',
//     position: {x: 0, y: 0 },
//     data: { expanded: false},
//   },
//   {
//     id: 'L',
//     position: { x: 0, y: 0},
//     data: { expanded : false},
//   },
  
// ];

// export const edges: Edge[] = [
//   {
//     id: 'A->B',
//     source: 'A',
//     target: 'B',
//   },
//   {
//     id: 'A->C',
//     source: 'A',
//     target: 'C',
//   },
//   {
//     id: 'A->D',
//     source: 'A',
//     target: 'D',
//   },
//   {
//     id: 'B->E',
//     source: 'B',
//     target: 'E',
//   },
//   {
//     id: 'C->F',
//     source: 'C',
//     target: 'F',
//   },
//   {
//     id: 'D->G',
//     source: 'D',
//     target: 'G',
//   },
//   {
//     id: 'D->H',
//     source: 'D',
//     target: 'H',
//   },
//   {
//     id: 'E->I',
//     source: 'E',
//     target: 'I',
//   },
//   {
//     id: 'F->J',
//     source : 'F',
//     target: 'J',
//   },
//     {
//     id: 'I->K',
//     source: 'E',
//     target: 'K',
//   },
//   {
//     id: 'F->L',
//     source: 'F',
//     target: 'L',
//   },
// ];
