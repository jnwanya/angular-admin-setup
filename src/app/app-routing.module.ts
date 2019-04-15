import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ADMIN_ROUTES} from './shared/routes/admin.routes';
import {HOME_ROUTES} from './shared/routes/extranet.routes';
import {IntranetComponent} from './layout/intranet/intranet.component';
import {ExtranetComponent} from './layout/extranet/extranet.component';

const routes: Routes = [
  { path: 'admin', component: IntranetComponent, children: ADMIN_ROUTES },
  { path: '', component: ExtranetComponent, children: HOME_ROUTES },
  {path: '**', redirectTo: '/coming-soon' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
