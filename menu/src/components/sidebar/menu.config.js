import {
    HomeIcon,
    UserIcon,
    CogIcon,
    UserCircleIcon,
    ShieldCheckIcon,
    LockOpenIcon,
    
    // DeviceMobileIcon,
  } from '@heroicons/react/24/solid';
// } from '@heroicons/react/outline';
import { faTable } from "@fortawesome/free-solid-svg-icons";


  
  export const sideMenu = [
    {
      label: 'Home',
      Icon: faTable,
      to: '/home',
    },
    {
      label: 'Profile',
      Icon: faTable,
      to: '/profile',
    },
    {
      label: 'Master Data',
      Icon: faTable,
      to: '/svrs/master-data',
      children: [
        {
          label: 'Psu',
          Icon: faTable,
          to: 'Psu',
          children: [
            {
              label: 'Add',
              Icon: faTable,
              to: 'Add/',
            },
            {
              label: 'List',
              Icon: faTable,
              to: 'List/',
            },
          ],
        },
      ],
    },
    // {
    //   label: 'PSU Add',
    //   Icon: UserIcon,
    //   to: '/psu',
    // },
    // {
    //   label: 'Settings',
    //   Icon: CogIcon,
    //   to: '/settings',
    //   children: [
    //     {
    //       label: 'Account',
    //       Icon: UserCircleIcon,
    //       to: 'account',
    //     },
    //     {
    //       label: 'Security',
    //       Icon: ShieldCheckIcon,
    //       to: 'security',
    //       children: [
    //         {
    //           label: 'Credentials',
    //           Icon: LockOpenIcon,
    //           to: 'credentials',
    //         },
    //         {
    //           label: '2-FA',
    //           Icon: UserIcon,
    //           to: '2fa',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];