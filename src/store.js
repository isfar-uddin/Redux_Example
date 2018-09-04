import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewire = [thunk];
const initialState = {};

const store = createStore(rootReducer,initialState,applyMiddleware(...middlewire));

export default store;