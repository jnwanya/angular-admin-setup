import * as Action from '../actions/common.action';
import {Country} from '../../models/entities/country';


export interface State {
  countryList: Array<Country>;
}
const initialState: State = {
  countryList: [],
};
export function reducer(state = initialState, action: Action.CommonAction): State {
  switch (action.type) {
    case Action.SET_COUNTRY_LIST:
      return {...state, countryList: action.payload};

    default:
      return state;
  }

}
export const countryList = (state: State) => state.countryList;
export const countryListLoaded = (state: State) => state.countryList.length !== 0;

