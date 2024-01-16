import { ReactNode } from 'react';
import { HomePage } from './HomePage/HomePage';
import { IconName } from '../components/Icon/Icon';
import { AboutPage } from './AboutPage/AboutPage';
import { WorkPage } from './WorkPage/WorkPage';
import { ProjectPage } from './ProjectPage/ProjectPage';
import { ContactPage } from './ContactPage/ContactPage';

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
    path: '/',
    color: '$FF0000',
    title: '',
    element: <HomePage />,
    icon: 'GiBirdHouse',
    showInNav: true,
  },
  {
    path: '/work',
    color: '$FF0000',
    title: 'Work',
    element: <WorkPage />,
    icon: 'GiSuitcase',
    showInNav: true,
  },
  {
    path: '/projects',
    color: '$FF0000',
    title: 'Projects',
    element: <ProjectPage />,
    icon: 'GiLightBulb',
    showInNav: true,
  },
  {
    path: '/contact',
    color: '$FF0000',
    title: 'Say Hello',
    element: <ContactPage />,
    icon: 'GiMailbox',
    showInNav: true,
  },
  {
    path: '/about',
    color: '$FF0000',
    title: 'About This Site',
    element: <AboutPage />,
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
