import {
  RiLayout4Fill,
  RiSettings4Fill,
  RiCustomerService2Fill,
  RiCalendarEventFill,
  RiUserAddFill,
  RiTeamFill,
  RiOrganizationChart,
} from 'react-icons/ri';
import { SidebarLinkI } from '../types';

//  Change sections to match expected sidebar

export const sidebarLinks: SidebarLinkI[] = [
  {
    title: 'Main Menu',
    links: [
      {
        path: '/',
        label: 'Dashboard',
        icon: <RiLayout4Fill />,
      },
      {
        path: '/recruitment',
        label: 'Recruitment',
        icon: <RiUserAddFill />,
      },
      {
        path: '/schedule',
        label: 'Schedule',
        icon: <RiCalendarEventFill />,
      },
      {
        path: '/employee',
        label: 'Employee',
        icon: <RiTeamFill />,
      },
      {
        path: '/department',
        label: 'Department',
        icon: <RiOrganizationChart />,
      },
    ],
  },
  {
    title: 'Other',
    links: [
      {
        path: '/support',
        label: 'Support',
        icon: <RiCustomerService2Fill />,
      },
      {
        path: '/settings',
        label: 'Settings',
        icon: <RiSettings4Fill />,
      },
    ],
  },
];
