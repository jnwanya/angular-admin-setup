import { Routes } from '@angular/router';

// Route for non logged user

export const HOME_ROUTES: Routes = [
  {
    path: 'coming-soon',
    loadChildren: './home/coming-soon/coming-soon.module#ComingSoonModule'
  },
  {
    path: 'auth',
    loadChildren: './access/access.module#AccessModule'
  },
  {path: '**', redirectTo: '/coming-soon' }
];
