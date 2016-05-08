import { combineReducers } from 'redux';
import contacts from './contacts';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  contacts,
  visibilityFilter
});

export default todoApp;


