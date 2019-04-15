import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AccessRoutingModule} from './access-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AccessRoutingModule,
  ],
  declarations: [LoginComponent]
})
export class AccessModule { }
