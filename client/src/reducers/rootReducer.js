import { combineReducers } from 'redux';
import app from '../components/OldApp/AppReducer';

export default combineReducers({
  counter: app,
});
