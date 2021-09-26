import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import pokeReducer from './reducer';

const store = createStore(
  combineReducers({
    pokeReducer: pokeReducer,
  }),
  applyMiddleware(thunk),
);
export default store;
