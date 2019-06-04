import axios from 'axios';
import store from '../store';

import * as actionTypes from './actionTypes';
import { countAverageTemp } from '../../shared/utility';


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
                    dispatch(addCitySuccess(payload));
                    dispatch(setActionMessage({type: 'success', data: {message: 'Dodano miasto do listy pomyślnie.'}}));
                }
                else {
                    dispatch(setActionMessage({type: 'error', data: {message: 'To miasto jest już dodane do listy!'}}));
                }
            })
            .catch(error => {
                dispatch(setActionMessage({type: 'error', data: error.response.data}));
            });
    }
};

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
        dispatch(setActionMessage({type: 'success', data: {message: 'Usunięto miasto z listy pomyślnie.'}}));
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

export const setActionMessage = (message) => {
    return {
        type: actionTypes.SET_ACTION_MESSAGE,
        payload: message
    }
}