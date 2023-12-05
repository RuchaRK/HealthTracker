import { createStore, applyMiddleware } from 'redux';
import { exerciseReducer } from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(exerciseReducer, applyMiddleware(thunk));

export default store;
