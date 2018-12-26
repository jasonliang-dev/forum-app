import { combineReducers } from 'redux';
import app from '../components/Counter/AppReducer';

export default combineReducers({
  counter: app,
});
