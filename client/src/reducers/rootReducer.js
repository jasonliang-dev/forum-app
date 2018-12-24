import { combineReducers } from 'redux';
import app from '../components/App/AppReducer';

export default combineReducers({
  counter: app,
});
