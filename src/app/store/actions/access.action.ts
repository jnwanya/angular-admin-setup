import {Action} from '@ngrx/store';
import {AuthenticatedUserDetail} from '../../models/authenticated-user-detail';
import {UserToken} from '../../models/user-token';
import {TokenDetail} from '../../models/token-detail';

export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER';
export class SetAuthenticatedUser implements Action {
  readonly type = SET_AUTHENTICATED_USER;
  constructor(public payload: AuthenticatedUserDetail) {}
}

export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export class SetUserToken implements Action {
  readonly type = SET_USER_TOKEN;
  constructor(public payload: UserToken) {}
}

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export class SetAccessToken implements Action {
  readonly type = SET_ACCESS_TOKEN;
  constructor(public payload: TokenDetail) {}
}

export const RENEW_ACCESS_TOKEN = 'RENEW_ACCESS_TOKEN';
export class RenewAccessToken implements Action {
  readonly type = RENEW_ACCESS_TOKEN;
  constructor(public payload: {refreshToken: string}) {}
}

export const SET_GUARDED_ROUTE = 'SET_GUARDED_ROUTE';
export class SetGuardedRoute implements Action {
  readonly type = SET_GUARDED_ROUTE;
  constructor(public payload: string) {}
}

export const LOG_OUT = 'LOG_OUT';
export class Logout implements Action {
  readonly type = LOG_OUT;
}


export const LOGGED_OUT = 'LOGGED_OUT';
export class LoggedOut implements Action {
  readonly type = LOGGED_OUT;
}

export type AccessAction = SetAccessToken | SetAuthenticatedUser | SetGuardedRoute | SetUserToken | Logout | LoggedOut
  | RenewAccessToken;

