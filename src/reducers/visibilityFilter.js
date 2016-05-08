const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'FILTER_FIRST_NAME':
      return {type: action.type, filter: action.filter};

    default:
      return {type: 'SHOW_ALL'};
  }
};

export default visibilityFilter