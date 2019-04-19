import {ActionReducerMap} from '@ngrx/store';
import * as fromAccess from './access.reducer';
import * as fromCommon from './common.reducer';

export interface AppState {
  access: fromAccess.State;
  common: fromCommon.State;
}
export const reducers: ActionReducerMap<AppState> = {
  access: fromAccess.reducer,
  common: fromCommon.reducer,
};
