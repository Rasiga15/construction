import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description:
      'Independent homes, villas and duplexes engineered for comfort and built to your family\'s pace of life.',
    icon: 'home',
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description:
      'Offices, showrooms and retail spaces designed to keep your business running while we build around it.',
    icon: 'building-2',
  },
  {
    id: 'interior',
    title: 'Interior Design & Fit-Out',
    description:
      'Space planning, modular furniture and finishes that turn a finished shell into a finished home.',
    icon: 'sofa',
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description:
      'Structural repairs, layout changes and facelifts for properties that just need a second chance.',
    icon: 'hammer',
  },
  {
    id: 'structural',
    title: 'Structural Consultancy',
    description:
      'Load calculations, soil testing and TATA TISCON-grade reinforcement planning for safer structures.',
    icon: 'ruler',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description:
      'One point of contact from foundation to handover — timelines, budgets and quality, tracked daily.',
    icon: 'clipboard-check',
  },
];
