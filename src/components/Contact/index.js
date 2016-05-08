import React, { Component } from 'react';

import { styles } from './styles.scss';


export default class ContactsTable extends Component {
  static propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    dateOfBirth: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    address: React.PropTypes.string,
    notes: React.PropTypes.string,
  };

  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.dateOfBirth}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
        <td>{this.props.notes}</td>
      </tr>
    )
  }
}