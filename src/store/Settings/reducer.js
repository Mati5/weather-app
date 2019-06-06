import * as actionTypes from './actionTypes';

const initialState = {
    unitTemp: 'C'
};

const settingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_UNIT_TEMP_SUCCESS: 
            return {
                ...state,
                unitTemp: action.payload
            }
        default:
            return state;
    }
};

export default settingsReducer;