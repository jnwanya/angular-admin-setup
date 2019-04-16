import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyMgmtComponent} from './company-mgmt.component';
import {CompanyMgmtRoutingModule} from './company-mgmt-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import {ArchwizardModule} from 'angular-archwizard';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompanyMgmtRoutingModule,
    SharedModule,
    NgxDatatableModule,
    ArchwizardModule,
    NgSelectModule
  ],
  exports: [],
  declarations: [
    CompanyMgmtComponent,
    CompanySetupComponent
  ],
  providers: [],
})
export class CompanyMgmtModule { }
