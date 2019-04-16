import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ADMIN_ROUTES} from './shared/routes/admin.routes';
import {HOME_ROUTES} from './shared/routes/extranet.routes';
import {IntranetComponent} from './layout/intranet/intranet.component';
import {ExtranetComponent} from './layout/extranet/extranet.component';

const routes: Routes = [
  { path: 'admin', component: IntranetComponent, children: ADMIN_ROUTES },
  { path: '', component: ExtranetComponent, children: HOME_ROUTES },
  { path: '**', redirectTo: '/coming-soon' }
];
// https://medium.com/@prowe214/lazy-loading-vs-preloading-modules-which-should-you-choose-85a1fb71a24
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
