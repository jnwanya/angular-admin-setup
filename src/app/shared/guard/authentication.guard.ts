import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import * as fromStore from '../../store';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private store: Store<fromStore.AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean {
    return this.store.pipe(select(fromStore.isAuthenticated)).pipe(take(1)).pipe(map(authenticated => {
        if (authenticated) {
            return true;
        } else {
          this.store.dispatch(new fromStore.SetGuardedRoute(state.url));
          this.router.navigate(['/auth', 'login']);
          // this.router.navigate(['/auth', 'login'], { queryParams: { returnUrl: state.url }});
          return false;
        }
      })
    );
  }

}
