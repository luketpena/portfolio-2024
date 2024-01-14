import { ReactNode } from 'react';
import { HomePage } from './HomePage/HomePage';
import { IconName } from '../components/Icon/Icon';

export interface RouteFormat {
  path: string;
  color: string;
  title: string;
  element: ReactNode;
  icon?: IconName;
  showInNav?: boolean;
}

export const routes: RouteFormat[] = [
  {
    path: '/test',
    color: '$00FF00',
    title: 'Test',
    element: <HomePage />,
  },
  {
    path: '/',
    color: '$FF0000',
    title: 'Home',
    element: <HomePage />,
    icon: 'GiBirdHouse',
    showInNav: true,
  },
  {
    path: '/work',
    color: '$FF0000',
    title: 'Work',
    element: <HomePage />,
    icon: 'GiSuitcase',
    showInNav: true,
  },
  {
    path: '/projects',
    color: '$FF0000',
    title: 'Projects',
    element: <HomePage />,
    icon: 'GiLightBulb',
    showInNav: true,
  },
  {
    path: '/portfolio',
    color: '$FF0000',
    title: 'Portfolio',
    element: <HomePage />,
    icon: 'FaCode',
    showInNav: true,
  },
  {
    path: '*',
    color: '$FF0000',
    title: 'Whoops',
    element: <p>Not all who wander are lost. But you are.</p>,
  },
];
