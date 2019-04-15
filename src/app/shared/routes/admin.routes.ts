import { Routes } from '@angular/router';

// Route for admin

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './admin/dashboard/dashboard.module#DashboardModule'
  },
];
