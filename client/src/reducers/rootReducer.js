import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import threadReducer from '../views/Thread/ThreadReducer';
import fetchReducer from './fetchReducer';

export default combineReducers({
  fetchData: fetchReducer,
  currentThread: threadReducer,
  form: formReducer,
});
