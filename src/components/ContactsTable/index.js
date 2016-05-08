import React, { Component } from 'react';
import Contact from 'components/Contact'

import { styles } from './styles.scss';

export default class ContactsTable extends Component {
  static propTypes = {
    contacts: React.PropTypes.array,
  };

  render() {
    return (
      <div className={`${styles}`}>
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