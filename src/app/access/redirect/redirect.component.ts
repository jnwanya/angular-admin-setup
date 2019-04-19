import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {CompanyType} from '../../models/entities/enums/company-type';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styles: []
})
export class RedirectComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>, private router: Router) { }

  ngOnInit() {
    this.store.select(fromStore.getAccessState).pipe(take(1)).subscribe(state => {
        if (state.guardedRoute) {
          this.router.navigateByUrl(state.guardedRoute);
          this.store.dispatch(new fromStore.SetGuardedRoute(''));
        } else if (state.authenticatedUser) {
           const company = state.authenticatedUser.company;
           if (company.companyType === CompanyType.ADMIN) {
              this.router.navigate(['admin/dashboard']);
           } else {
             // this.router.navigate(['admin/dashboard']);
           }
        } else {
            this.router.navigate(['/']);
        }
    });
  }

}
