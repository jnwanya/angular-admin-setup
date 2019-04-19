import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from './store';
import {DataStorageService} from './shared/services/data-storage.service';
import {UserToken} from './models/user-token';
import {AppConstant} from './shared/utils/app-constant';
import {AccessService} from './access/access.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ota-admin-platform';
  constructor(private store: Store<fromStore.AppState>, private dataStorage: DataStorageService,
              private accessService: AccessService, private router: Router) {}

  ngOnInit(): void {
     this.updateAppAuthenticationStatus();
  }

  updateAppAuthenticationStatus(): void {
    const saveUserToken: UserToken = this.dataStorage.restoreData(AppConstant.USER_TOKEN);
    if (!saveUserToken) {
       return;
    }
    const tokenExpiryTime = saveUserToken.accessToken.expiryTime.getTime(); // 3 * 60 * 60 * 1000; // 3 hours.
    const currentTimeInMs = new Date().getTime();
    if (currentTimeInMs > tokenExpiryTime) {
      this.dataStorage.deleteData(AppConstant.USER_TOKEN);
      return;
    }
    const accessTokenRequestData = {refreshToken: saveUserToken.refreshToken.token};
    this.store.dispatch(new fromStore.SetUserToken(saveUserToken));
    this.store.dispatch(new fromStore.RenewAccessToken(accessTokenRequestData));
    this.accessService.getAuthenticatedUserDetails().subscribe(data => {
       this.store.dispatch(new fromStore.SetAuthenticatedUser(data));
       this.router.navigate(['/auth/redirect']);
    }, error1 => {
      console.log('error occurred: ', error1);
    });
  }
}
