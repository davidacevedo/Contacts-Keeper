import { connect } from 'react-redux'
import ContactsTable from 'components/ContactsTable'
import _ from 'lodash';

const getVisibleContacts = (contacts, filter) => {
  if(!filter) {
    return contacts;
  }

  switch (filter.type) {
    case 'SHOW_ALL':
      return contacts;
    case 'FILTER_FIRST_NAME':
      return _.filter(contacts, function(o) {return _.includes(o.firstName, filter.filter)});
    default:
      return contacts;
  }
};


const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state.contacts, state.visibilityFilter)
  }
};

const VisibleContacts = connect(
  mapStateToProps,
)(ContactsTable);

export default VisibleContacts
