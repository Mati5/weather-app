import axios from 'axios';
import store from '../../index';

import * as actionTypes from './actionTypes';


export const setCityList = (cityList) => {
    return {
        type: actionTypes.SET_CITY_LIST,
        payload: cityList
    }
}

export const addCitySuccess = (cityData) => {
    return {
        type: actionTypes.ADD_CITY_SUCCESS,
        payload: cityData
    }
}

export const addCity = (cityName) => {
    return dispatch => {
        let unitTemp = '';
        switch(store.getState().settingsReducer.unitTemp) {
            case 'C':
                unitTemp = 'metric';
            break;
            case 'F':
                unitTemp = 'imperial';
            break;
            default:
                unitTemp = 'metric';
        }

        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&mode=json&units=' + unitTemp + '&APPID=abd89db44bd2c09c119867f11671ce6e')
            .then(response => {
                let payload = {
                    city: response.data.city,
                    list: response.data.list
                }

                let isNotExisted = true;
                for(let i in store.getState().weatherReducer.cityList) {
                    if(store.getState().weatherReducer.cityList[i].city.name === payload.city.name) {
                        isNotExisted = false;
                    }
                }

                if(isNotExisted) {
                    countAverageTemp(payload);
                    dispatch(addCitySuccess(payload))
                }

                dispatch(fetchAddCityFail(null));
            })
            .catch(error => {
                dispatch(fetchAddCityFail(error.response.data));
            });
    }
};

export const countAverageTemp = (weatherList) => {
    let sum = 0;
    let average = 0;
    let quantity = 0;

    for(let partTemp of weatherList.list) {
        sum += partTemp.main.temp;
        quantity++; 
    }

    average = (sum/quantity).toFixed(1);
    weatherList.averageTemp = average;

    return weatherList;
}

export const deleteCitySuccess = (updatedCityList) => {
    return {
        type: actionTypes.DELETE_CITY_SUCCESS,
        payload: updatedCityList
    }
}

export const deleteCity = (idCity) => {
    return dispatch => {
        let updatedCityList = [...store.getState().weatherReducer.cityList];
        updatedCityList = updatedCityList.filter((element) => {
            return element.city.id !== idCity;
        });

        dispatch(deleteCitySuccess(updatedCityList));
    }
}

export const setSelectedCity = (selectedCity) => {
    return {
        type: actionTypes.SET_SELECTED_CITY,
        payload: selectedCity
    }
}

export const selectCity = (cityName) => {
    return dispatch => {
        const index = store.getState().weatherReducer.cityList.findIndex(element => element.city.name === cityName);
        const selectedCity = store.getState().weatherReducer.cityList[index];
    
        dispatch(setSelectedCity(selectedCity));
    }
}

export const fetchAddCityFail = (error) => {
    return {
        type: actionTypes.FETCH_ADD_CTY_FAIL,
        payload: error
    }
}