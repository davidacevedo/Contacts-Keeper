import React, { Component } from 'react';
import Contact from 'containers/Contact'
import { connect } from 'react-redux'
import _ from 'lodash';


import { styles } from './styles.scss';

export default class ContactsTable extends Component {
  static propTypes = {
    contacts: React.PropTypes.array,
  };

  render() {
    return (
      <div className='contacts-table'>
        <table>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
          </thead>
          <tbody>
          {this.props.contacts.map(contact =>
            <Contact
              key={contact.id}
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              dateOfBirth={contact.dateOfBirth}
              phone={contact.phone}
              email={contact.email}
              notes={contact.notes}
            />
          )}
          </tbody>
        </table>
      </div>
    )
  }
}

const getVisibleContacts = (contacts, filter) => {
  if(!filter) {
    return contacts;
  }

  switch (filter.type) {
    case 'SHOW_ALL':
      return contacts;
    case 'FILTER_FIRST_NAME':
      return _.filter(contacts, function(contact) {return _.includes(contact.firstName.toLowerCase(), filter.filter.toLowerCase())});
    case 'FILTER_LAST_NAME':
      return _.filter(contacts, function(contact) {return _.includes(contact.lastName.toLowerCase(), filter.filter.toLowerCase())});
    case 'FILTER_DATE_OF_BIRTH':
      return _.filter(contacts, function(contact) {return _.includes(contact.dateOfBirth.toString().toLowerCase(), filter.filter.toLowerCase())});
    case 'FILTER_PHONE':
      return _.filter(contacts, function(contact) {return _.includes(contact.phone.toString().toLowerCase(), filter.filter.toLowerCase())});
    case 'FILTER_EMAIL':
      return _.filter(contacts, function(contact) {return _.includes(contact.email.toString().toLowerCase(), filter.filter.toLowerCase())});
    case 'FILTER_NOTES':
      return _.filter(contacts, function(contact) {return _.includes(contact.notes.toLowerCase(), filter.filter.toLowerCase())});
    default:
      return contacts;
  }
};


const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state.contacts, state.visibilityFilter)
  }
};

const VisibleContactsTable = connect(
  mapStateToProps,
)(ContactsTable);

export default VisibleContactsTable
