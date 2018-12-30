import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from '../views/Counter/CounterReducer';
import home from '../views/Home/HomeReducer';

export default combineReducers({
  counter: app,
  home,
  form: formReducer,
});
