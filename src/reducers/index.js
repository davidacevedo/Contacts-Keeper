// import { combineReducers } from 'redux-immutable';
// import routing from './routing';
// import auth from './auth';
// import user from './user';
//
// const rootReducer = combineReducers({
//   auth,
//   routing,
//   user,
// });
//
// export default rootReducer;

import { combineReducers } from 'redux';
import contacts from './contacts';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  contacts,
  visibilityFilter
});

export default todoApp;


