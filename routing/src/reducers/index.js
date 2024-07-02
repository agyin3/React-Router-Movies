import { combineReducers } from 'redux';
import MoviesReducer from './Movies';

const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;