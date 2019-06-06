import * as actionTypes from './actionTypes';
import store from '../index';

import { convertCelsiusToFahrenheit, convertFahrenheitToCelsius } from '../../shared/utility';
import { setCityList } from '../Cities/actions';

export const changeUnitTempSuccess = (unitTemp) => ({
    type: actionTypes.SET_UNIT_TEMP_SUCCESS,
    payload: unitTemp
});

export const changeUnitTemp = (unitTemp) => dispatch => {
    let cityList = store.getState().citiesReducer.cityList;

    switch (unitTemp) {
        case 'C':
            for (let city of cityList) {
                city.averageTemp = convertFahrenheitToCelsius(city.averageTemp);
            }
            break;
        case 'F':
            for (let city of cityList) {
                city.averageTemp = convertCelsiusToFahrenheit(city.averageTemp);
            }
            break;
        default:
            return cityList;
    }

    dispatch(changeUnitTempSuccess(unitTemp));
    dispatch(setCityList(cityList));
};