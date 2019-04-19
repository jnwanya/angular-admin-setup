import { createSelector } from '@ngrx/store';
import * as fromStore from '../reducers/access.reducer';
import {AppState} from '../reducers';

export const getAccessState = (state: AppState) => state.access;
export const isAuthenticated = createSelector(getAccessState, fromStore.authenticated);
export const getUserToken = createSelector(getAccessState, fromStore.userToken);
export const getAccessToken = createSelector(getAccessState, fromStore.accessToken);
export const getRefreshToken = createSelector(getAccessState, fromStore.refreshToken);
export const getAuthenticatedUser = createSelector(getAccessState, fromStore.authenticatedUser);
export const getAppUser = createSelector(getAccessState, fromStore.appUser);
export const getCompany = createSelector(getAccessState, fromStore.company);
export const getUserRoles = createSelector(getAccessState, fromStore.userRoles);
export const getGaurdedRoute = createSelector(getAccessState, fromStore.guardedRoute);

