var procoreStorage = window.localStorage.procoreHiring;
var offset;
if(!procoreStorage) {
  offset = 0;
  procoreStorage = [];
} else {
  procoreStorage = JSON.parse(procoreStorage);
  offset = procoreStorage.length;
}



const contacts = (state = procoreStorage, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
    {
      window.localStorage.procoreHiring = JSON.stringify([
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
      ]);
      return [
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
    }
    default:
      return state
  }
};

export default contacts