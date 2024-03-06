import { Node, Edge } from 'reactflow';

export const nodes: Node[] = [
  {
    id: 'A',
    position: { x: 0, y: 0 },
    data: { expanded: true, label: 'Organisation Name' },
  },
  {
    id: 'B',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: '1. Team/Member Name' },
  },
  {
    id: 'C',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: '2. Team/Member Name' },
  },
  {
    id: 'D',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: '3. Team/Member Name' },
  },
  {
    id: 'E',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: 'Team/Member Name' },
  },
  {
    id: 'F',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: 'Team/Member Name' },
  },
  {
    id: 'G',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: 'Team/Member Name' },
  },
  {
    id: 'H',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: 'Team/Member Name' },
  },
  {
    id: 'I',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: 'Team/Member Name' },
  },
];

export const edges: Edge[] = [
  {
    id: 'A->B',
    source: 'A',
    target: 'B',
  },
  {
    id: 'A->C',
    source: 'A',
    target: 'C',
  },
  {
    id: 'A->D',
    source: 'A',
    target: 'D',
  },
  {
    id: 'B->E',
    source: 'B',
    target: 'E',
  },
  {
    id: 'C->F',
    source: 'C',
    target: 'F',
  },
  {
    id: 'C->G',
    source: 'C',
    target: 'G',
  },
  {
    id: 'D->H',
    source: 'D',
    target: 'H',
  },
  {
    id: 'D->I',
    source: 'D',
    target: 'I',
  },
];
