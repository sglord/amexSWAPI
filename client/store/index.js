//need a way to get all character information for the main page of character list
// need a way to get extended info on the current character
// need a way to get all the movie info
// need to handle loading

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import characterReducer from './characterReducer';
import filmReducer from './filmReducer';

const reducer = combineReducers({ characterReducer, filmReducer });
const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './characterReducer';
export * from './filmReducer';
