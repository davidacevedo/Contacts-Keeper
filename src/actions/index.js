let nextContactId = 0
export const addContact = (info) => {
  return {
    type: 'ADD_CONTACT',
    id: nextContactId++,
    info
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}