import DatabaseReducer from './Database.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  database: DatabaseReducer,
});
