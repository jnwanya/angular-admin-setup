import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../shared/commons/base.component';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AccessService} from '../access.service';
import {AuthenticatedUserDetail} from '../../models/authenticated-user-detail';
import {UserToken} from '../../models/user-token';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(public toast: ToastrService, private accessService: AccessService,
              private store: Store<fromStore.AppState>, private router: Router) { super(toast); }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  handleLogin(form: NgForm) {
    this.accessService.processLogin(form.value).subscribe(response => {
      this.successMessage(response.message);
      const responseData = response.data;
      console.log(responseData);
      const authenticatedUser: AuthenticatedUserDetail = responseData.authenticatedUser;
      const userToken: UserToken = responseData.userToken;
      this.store.dispatch(new fromStore.SetAuthenticatedUser(authenticatedUser));
      this.store.dispatch(new fromStore.SetUserToken(userToken));
      this.router.navigate(['/auth/redirect']);
    }, error1 => this.handleHttpRequestError(error1));
  }

}
