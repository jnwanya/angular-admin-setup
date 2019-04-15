// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  shortLabel?: string;
  state: string;
  mainState?: string;
  icon: string;
  class: string;
  badge: Badge;
  isExternalLink: boolean;
 // submenu: RouteInfo[];
  submenu?: Array<{name: string, path: string, badge?: Badge}>;
}

interface Badge {
   name: string;
   value: string;
}
