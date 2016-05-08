import React from 'react'
import { connect } from 'react-redux'
import { addContact } from 'actions'

import { styles } from './styles.scss';


let AddContact = ({ dispatch }) => {
  let input

  return (
    <div className={`${styles}`}>
      <form action="" className="search-form">
        <div className="form-group has-feedback">
          <label for="search" className="sr-only">Search</label>
          <input type="text" className="form-control" name="search" id="search" placeholder="search" />
          <span className="glyphicon glyphicon-search form-control-feedback" />
        </div>
      </form>
    </div>
  )
};
AddContact = connect()(AddContact);

export default AddContact