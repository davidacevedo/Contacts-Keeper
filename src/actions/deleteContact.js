export const deleteContact = (id) => {
  return {
    type: 'DELETE_CONTACT',
    id: id,
  };
};