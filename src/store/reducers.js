import { combineReducers } from 'redux';

import citiesReducer from './Cities/reducer';
import settingsReducer from './Settings/reducer';

const rootReducer = combineReducers({
    citiesReducer: citiesReducer,
    settingsReducer: settingsReducer
});

export default rootReducer;
