import * as actionTypes from './actionTypes';

const initialState = {
    cityList: [],
    selectedCity: null,
    message: null
};

const citiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CITY_LIST:
            return {
                ...state,
                cityList: action.payload
            };
        case actionTypes.ADD_CITY_SUCCESS: 
            return {
                ...state,
                cityList: [...state.cityList, action.payload]
            };
        case actionTypes.DELETE_CITY_SUCCESS: 
            return {
                ...state,
                cityList: action.payload
            };
        case actionTypes.SET_SELECTED_CITY: 
            return {
                ...state,
                selectedCity: action.payload
            };
        case actionTypes.SET_ACTION_MESSAGE: 
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
};

export default citiesReducer;