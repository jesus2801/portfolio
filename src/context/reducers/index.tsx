import { combineReducers } from 'redux';

import DatabaseReducer from './Database.reducer';

export default combineReducers({
  database: DatabaseReducer,
});
