import {Action} from '@ngrx/store';
import {Country} from '../../models/entities/country';

export const SET_COUNTRY_LIST = 'SET_COUNTRY_LIST';
export class SetCountryList implements Action {
  readonly type = SET_COUNTRY_LIST;
  constructor(public payload: Array<Country>) {}
}

export type CommonAction = SetCountryList;
