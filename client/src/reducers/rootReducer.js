import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from '../views/Counter/CounterReducer';
import threadReducer from '../views/Thread/ThreadReducer';
import fetchReducer from './fetchReducer';

export default combineReducers({
  counter: counterReducer,
  fetchData: fetchReducer,
  currentThread: threadReducer,
  form: formReducer,
});
