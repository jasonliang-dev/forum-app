import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from '../components/Counter/AppReducer';

export default combineReducers({
  counter: app,
  form: formReducer,
});
