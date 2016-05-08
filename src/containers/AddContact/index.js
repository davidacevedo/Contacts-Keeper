import React from 'react'
import { connect } from 'react-redux'
import { addContact } from 'actions'

let AddContact = ({ dispatch }) => {
  let firstName;
  let lastName;
  let dateOfBirth;
  let phone;
  let email;
  let notes;




  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        dispatch(addContact({
          firstName: firstName.value,
          lastName: lastName.value,
          dateOfBirth: dateOfBirth.value,
          phone: phone.value,
          email: email.value,
          notes: notes.value
        }));
        firstName.value = ''
        lastName.value = ''
        dateOfBirth.value = ''
        phone.value = ''
        email.value = ''
        notes.value = ''
      }}>
        <input ref={node => {
          firstName = node
        }} />
        <input ref={node => {
          lastName = node
        }} />
        <input ref={node => {
          dateOfBirth = node
        }} />
        <input ref={node => {
          phone = node
        }} />
        <input ref={node => {
          email = node
        }} />
        <input ref={node => {
          notes = node
        }} />

        <button type="submit">
          Add Contact
        </button>
      </form>
    </div>
  )
}
AddContact = connect()(AddContact)

export default AddContact
