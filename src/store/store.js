import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer  from './reducers/weatherReducer';
import settingsReducer from './reducers/settingsReducer';
import { loadState, saveState } from '../localStorage/localStorage';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const persistedState = loadState();

const rootRedcuer = combineReducers({
    weatherReducer: weatherReducer,
    settingsReducer: settingsReducer
});

const store = createStore(rootRedcuer, persistedState, composeEnhancers(
    applyMiddleware(thunk)
));


store.subscribe(() => {
    saveState(store.getState());
});

export default store;