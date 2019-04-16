import { Routes } from '@angular/router';

// Route for admin

export const ADMIN_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './admin/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'company',
    loadChildren: './admin/company-mgmt/company-mgmt.module#CompanyMgmtModule'
  },
  {path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
];
