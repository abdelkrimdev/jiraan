import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
    combineReducers({
        
    }),
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    )
);

export default store;
