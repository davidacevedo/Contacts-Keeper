import _ from 'lodash';

var procoreStorage = window.localStorage.procoreHiring;
var offset;
if(!procoreStorage) {
  offset = 0;
  procoreStorage = [];
} else {
  procoreStorage = JSON.parse(procoreStorage);
  if(procoreStorage.length == 0) {
    offset = 0;
  } else {
    offset = procoreStorage[procoreStorage.length - 1].id + 1;
  }
}



const contacts = (state = procoreStorage, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
    {
      let finalState = [
        ...state,
        {
          id: action.id + offset,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          dateOfBirth: action.data.dateOfBirth,
          phone: action.data.phone,
          email: action.data.email,
          notes: action.data.notes,
        }
      ];

      window.localStorage.procoreHiring = JSON.stringify(finalState);
      return finalState
    }
    case 'DELETE_CONTACT':
    {

      var finalState = _.filter(state, function(item) { return item.id != action.id} );
      window.localStorage.procoreHiring = JSON.stringify(finalState);
      return finalState;
    }
    default:
      return state
  }
};

export default contacts