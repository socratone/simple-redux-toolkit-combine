import { combineReducers } from 'redux';
import bugs from './bugs';
import items from './items';

export default combineReducers({
  bugs,
  items
});