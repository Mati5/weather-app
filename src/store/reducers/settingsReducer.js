import * as actionTypes from '../actions/actionTypes';

const initialState = {
    unitTemp: 'C'
}

const setUnitTempSuccess = (state, action) => {
    return {
        ...state,
        unitTemp: action.payload
    }
}

const settingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_UNIT_TEMP_SUCCESS: return setUnitTempSuccess(state, action);
        default:
            return state;
    }
}

export default settingsReducer;