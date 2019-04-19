import * as Action from '../actions/access.action';
import {AuthenticatedUserDetail} from '../../models/authenticated-user-detail';
import {UserToken} from '../../models/user-token';


export interface State {
  userToken: UserToken;
  authenticatedUser: AuthenticatedUserDetail;
  guardedRoute: string;
}
const initialState: State = {
  userToken: null,
  authenticatedUser: null,
  guardedRoute: null,
};
export function reducer(state = initialState, action: Action.AccessAction): State {
  switch (action.type) {
    case Action.SET_AUTHENTICATED_USER:
      return {...state, authenticatedUser: action.payload};

    case Action.SET_USER_TOKEN:
      return {...state, userToken: action.payload};

    case Action.SET_ACCESS_TOKEN:
      return {...state, userToken: {...state.userToken, accessToken: action.payload}};

    case Action.LOG_OUT:
      return {...state, userToken: null, authenticatedUser: null};

    case Action.SET_GUARDED_ROUTE:
      return {...state, guardedRoute: action.payload};

    default:
      return state;
  }

}
export const authenticated = (state: State) => (state.userToken != null && state.authenticatedUser != null);
export const userToken = (state: State) => state.userToken;
export const accessToken = (state: State) => state.userToken != null ? state.userToken.accessToken : null;
export const refreshToken = (state: State) => state.userToken != null ? state.userToken.refreshToken : null;
export const authenticatedUser = (state: State) => state.authenticatedUser;
export const appUser = (state: State) => state.authenticatedUser != null ? state.authenticatedUser.user : null;
export const company = (state: State) => state.authenticatedUser != null ? state.authenticatedUser.company : null;
export const userRoles = (state: State) => state.authenticatedUser != null ? state.authenticatedUser.userRoles : null;
export const guardedRoute = (state: State) => state.guardedRoute;

