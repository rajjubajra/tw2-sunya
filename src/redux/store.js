import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { reducerFetchTracks } from './reducerFetchTracks';



const reducer = combineReducers(
  {
    reducerFetchTracks
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
