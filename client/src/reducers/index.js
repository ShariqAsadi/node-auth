import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import authReducer from './auth';

export default combineReducers({
  form: FormReducer,
  auth: authReducer
});
