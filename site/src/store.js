import {combineReducers, createStore} from 'redux';

import app from './reducers/app';

export default createStore(combineReducers({app}));
