import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import history from './history';

import weatherReducer  from './store/reducers/weatherReducer';
import settingsReducer from './store/reducers/settingsReducer';
import { loadState, saveState } from './localStorage/localStorage';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const persistedState = loadState();

const rootRedcuer = combineReducers({
    weatherReducer: weatherReducer,
    settingsReducer: settingsReducer
});

const store = createStore(rootRedcuer, persistedState, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;

store.subscribe(() => {
    saveState(store.getState());
});

const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
