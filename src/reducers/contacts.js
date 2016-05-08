const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          id: action.id,
          firstName: action.info.firstName,
          lastName: action.info.lastName,
          dateOfBirth: action.info.dateOfBirth,
          phone: action.info.phone,
          email: action.info.email,
          notes: action.info.notes,
        }
      ];
    default:
      return state
  }
};

export default contacts