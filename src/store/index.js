import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer  from './reducers';
import { loadState, saveState } from '../localStorage/localStorage';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(thunk)
));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;