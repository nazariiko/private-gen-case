import { combineReducers } from 'redux';
import { trendsReducer } from './trendsReducer';
import { soundReducer } from './soundReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  trends: trendsReducer,
  user: userReducer,
  sound: soundReducer,
});
