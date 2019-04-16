import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyMgmtComponent} from './company-mgmt.component';
import {CompanySetupComponent} from './company-setup/company-setup.component';

const routes: Routes = [
  {
    path: 'set-up', component: CompanySetupComponent, data: {
      title: 'Company Setup',
      icon: 'fas fa-user',
      caption: 'Setup new company',
      status: true
    }
  },
  {
    path: '', component: CompanyMgmtComponent, data: {
      title: 'Company Management',
      icon: 'fas fa-desktop',
      caption: 'Create, Update and Manage existing companies',
      status: true
    }
  },
  {path: '**', redirectTo: '/admin/company', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyMgmtRoutingModule { }
