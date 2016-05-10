const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'FILTER_FIRST_NAME':
      return {type: action.type, filter: action.filter};
    case 'FILTER_LAST_NAME':
      return {type: action.type, filter: action.filter};
    case 'FILTER_DATE_OF_BIRTH':
      return {type: action.type, filter: action.filter};
    case 'FILTER_PHONE':
      return {type: action.type, filter: action.filter};
    case 'FILTER_EMAIL':
      return {type: action.type, filter: action.filter};
    case 'FILTER_NOTES':
      return {type: action.type, filter: action.filter};
    default:
      return {type: 'SHOW_ALL'};
  }
};

export default visibilityFilter