import { createSelector } from '@ngrx/store';
import * as fromStore from '../reducers/common.reducer';
import {AppState} from '../reducers';

export const getCommonState = (state: AppState) => state.common;
export const getCountryList = createSelector(getCommonState, fromStore.countryList);
export const isCountryListLoaded = createSelector(getCommonState, fromStore.countryListLoaded);
