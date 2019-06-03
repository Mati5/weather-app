import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cityList: [],
    selectedCity: null,
    message: null
};

const setCityList = (state, action) => {
    return {
        ...state,
        cityList: action.payload
    }
}

const addCitySuccess = (state, action) => {
    return {
        ...state,
        cityList: [...state.cityList, action.payload]
    }
}

const deleteCitySuccess = (state, action) => {
    return {
        ...state,
        cityList: action.payload
    }
}

const setSelectedCity = (state, action) => {
    return {
        ...state,
        selectedCity: action.payload
    }
}

const setActionMessage = (state, action) => {
    return {
        ...state,
        message: action.payload
    }
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CITY_LIST: return setCityList(state, action);
        case actionTypes.ADD_CITY_SUCCESS: return addCitySuccess(state, action);
        case actionTypes.DELETE_CITY_SUCCESS: return deleteCitySuccess(state, action);
        case actionTypes.SET_SELECTED_CITY: return setSelectedCity(state, action);
        case actionTypes.SET_ACTION_MESSAGE: return setActionMessage(state, action);
  
        default:
            return state;
    }
}

export default weatherReducer;