import React, { Component } from 'react';
import * as actionCreators from 'actions/deleteContact'

import { styles } from './styles.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


export default class Contact extends Component {
  static propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    dateOfBirth: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    address: React.PropTypes.string,
    notes: React.PropTypes.string,
    id: React.PropTypes.number
  };

  handleClick(event) {
    this.props.deleteContact(this.props.id);
  }

  render() {
    return (
      <tr className={`${styles}`} onClick={this.handleClick.bind(this)}>
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

export default connect(
  state => ({}),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Contact);
