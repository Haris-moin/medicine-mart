import {createStore} from 'redux';
import {cartReducer, authReducer} from './reducers';
import {combineReducers} from 'redux';

const reducers = combineReducers({cartReducer, authReducer});
const store = createStore(reducers);
export default store;
