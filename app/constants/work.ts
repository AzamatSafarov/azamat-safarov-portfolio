import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2021',
    title: 'SFedU',
    subtitle: 'B.A. International Relations',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'SfeduNet 8',
    subtitle: 'Project-Educational Intensive',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -3, -6),
    year: '2024',
    title: 'SFedU CTT',
    subtitle: 'Project Office Specialist',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -5, -9),
    year: '2025',
    title: 'SfeduNet 9',
    subtitle: 'Prize Winner',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -3, -12),
    year: '2025',
    title: 'SfeduNet 10',
    subtitle: 'Prize Winner',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-2, -2, -15),
    year: '2025',
    title: 'Arkhipelag',
    subtitle: 'Skolkovo, School of Thinking Lab',
    position: 'right',
  },
  {
    point: new THREE.Vector3(0, 0, -18),
    year: '2025',
    title: 'SFedU',
    subtitle: 'M.A. International Security & Data Analysis',
    position: 'right',
  },
  {
    point: new THREE.Vector3(0, 0, -21),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Building...',
    subtitle: 'Digital Humanities + IR + Code',
    position: 'right',
  }
];
