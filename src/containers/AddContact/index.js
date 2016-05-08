import React from 'react'
import { connect } from 'react-redux'
import { addContact } from 'actions'

import { styles } from './styles.scss';

let AddContact = ({ dispatch }) => {
  let firstName;
  let lastName;
  let dateOfBirth;
  let phone;
  let email;
  let notes;

  return (
    <div className={`${styles}`}>
      <form className="form-horizontal" role="form" onSubmit={e => {
        e.preventDefault();

        dispatch(addContact({
          firstName: firstName.value,
          lastName: lastName.value,
          dateOfBirth: dateOfBirth.value,
          phone: phone.value,
          email: email.value,
          notes: notes.value
        }));
        firstName.value = '';
        lastName.value = '';
        dateOfBirth.value = '';
        phone.value = '';
        email.value = '';
        notes.value = '';
      }}>
        <div className="form-group">
          <label className="control-label col-sm-3" for="firstName">First Name:</label>
          <div className="col-sm-9">
            <input type="firstName" className="form-control" id="firstName" placeholder="Enter First Name" ref={node => {
              firstName = node
            }}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" for="lastName">Last Name:</label>
          <div className="col-sm-9">
            <input type="lastName" className="form-control" id="lastName" placeholder="Enter Last Name" ref={node => {
              lastName = node
            }}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" for="dateOfBirth">Date Of Birth:</label>
          <div className="col-sm-9">
            <input type="dateOfBirth" className="form-control" id="dateOfBirth" placeholder="Enter Date Of Birth" ref={node => {
              dateOfBirth = node
            }}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" for="phone">Phone Number:</label>
          <div className="col-sm-9">
            <input type="phone" className="form-control" id="phone" placeholder="Enter Phone Number" ref={node => {
              phone = node
            }}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" for="email">Email:</label>
          <div className="col-sm-9">
            <input type="email" className="form-control" id="email" placeholder="Enter Email" ref={node => {
              email = node
            }}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" for="notes">Notes:</label>
          <div className="col-sm-9">
            <input type="notes" className="form-control" id="notes" placeholder="Enter Notes" ref={node => {
              notes = node
            }}/>
          </div>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  )
};

AddContact = connect()(AddContact)

export default AddContact
