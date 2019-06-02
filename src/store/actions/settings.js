import * as actionTypes from './actionTypes';
import store from '../../index';

export const changeUnitTempSuccess = (unitTemp) => {
    return {
        type: actionTypes.SET_UNIT_TEMP_SUCCESS,
        payload: unitTemp
    }
}

export const setCityList = (cityList) => {
    return {
        type: actionTypes.SET_CITY_LIST,
        payload: cityList
    }
}

export const changeUnitTemp = (unitTemp) => {
    return dispatch => {
        let cityList = store.getState().weatherReducer.cityList;

        switch (unitTemp) {
            case 'C':
                for (let city of cityList) {
                    city.averageTemp = ((city.averageTemp - 32) / 1.8).toFixed(1);
                }
                break;
            case 'F':

                for (let city of cityList) {
                    city.averageTemp = ((city.averageTemp * 1.8) + 32).toFixed(1);
                }
                break;
            default:
                return cityList;
        }

        dispatch(changeUnitTempSuccess(unitTemp));
        dispatch(setCityList(cityList))

    }
}