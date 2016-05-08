export const filterContacts = (filter, type='FILTER_FIRST_NAME') => {
  switch(true) {
    case filter.length > 0:
    {
      return {
        type: type,
        filter
      };
    }
    default:
      return {type:'SHOW_ALL'}
  }
};