import { connect } from 'react-redux'
import ContactsTable from 'components/ContactsTable'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};

const VisibleContacts = connect(
  mapStateToProps
)(ContactsTable);

export default VisibleContacts
