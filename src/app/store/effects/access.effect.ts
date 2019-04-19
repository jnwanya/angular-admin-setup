import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {DataStorageService} from '../../shared/services/data-storage.service';
import {ofType} from '@ngrx/effects';
import * as Action from '../actions/access.action';
import * as fromRoot from '../../store';
import {map} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators/tap';
import {AppConstant} from '../../shared/utils/app-constant';
import {Injectable} from '@angular/core';

@Injectable()
export class AccessEffect {
  constructor(private actions$: Actions,
              private router: Router,
              private store: Store<fromRoot.AppState>,
              private dbService: DataStorageService) {
  }

  @Effect({dispatch: false}) saveServiceSearchData =
    this.actions$
      .pipe(ofType(Action.SET_USER_TOKEN),
        map((action: Action.SetUserToken) => action.payload),
        tap((payload)  => {
         // console.log('Service search data to save', payload);
          this.dbService.saveData(JSON.stringify(payload), AppConstant.USER_TOKEN);
        })
      );

  @Effect({dispatch: false}) logout =
    this.actions$
      .pipe(ofType(Action.LOG_OUT),
        tap(()  => {
          this.dbService.deleteData(AppConstant.USER_TOKEN);
          this.router.navigate(['/auth/login']);
        })
      );
}
