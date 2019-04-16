

// Admin sidebar menu routes and data
import {RouteInfo} from './sidebar-metadata';

export const ADMIN_SIDEBAR: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard', state: 'dashboard', icon: 'fas fa-home', class: '', badge: null, shortLabel: 'D',
     isExternalLink: false, submenu: [] },
  { path: '/admin/company', title: 'Company', state: 'company', icon: 'fas fa-server', class: '', badge: null, shortLabel: 'C',
    isExternalLink: false, submenu: [] },
  /*{
    path: '',
    state: 'company',
    shortLabel: 'C',
    title: 'Company',
    isExternalLink: false,
    icon: 'icon-home',
    class: '',
    badge: null,
    submenu: [
      {
        path: '',
        name: 'Default'
      },
      {
        path: 'ecommerce',
        name: 'Ecommerce'
      },
      {
        path: 'crm-dashboard',
        name: 'CRM'
      },
      {
        path: 'analytics',
        name: 'Analytics',
      }
    ]
  }*/
];
