import { combineReducers } from 'redux';
import { trendsReducer } from './trendsReducer';
import { soundReducer } from './soundReducer';

export const rootReducer = combineReducers({
  trends: trendsReducer,
  sound: soundReducer,
});
