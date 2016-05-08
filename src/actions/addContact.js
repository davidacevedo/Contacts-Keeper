let nextContactId = 0;
export const addContact = (data) => {
  return {
    type: 'ADD_CONTACT',
    id: nextContactId++,
    data
  };
};