import { combineReducers } from 'redux';
import simple from './simpleReducer';
import app from '../components/App/AppReducer';

export default combineReducers({
  simple,
  counter: app,
});
