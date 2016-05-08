import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from 'actions/filterContacts'

import { styles } from './styles.scss';

export class SearchBar extends Component {
  handleChange(event) {
    this.props.filterContacts(event.target.value);
  }

  render() {
    return (
      <div className={`${styles}`}>
        <form action="" className="search-form" onSubmit={e => {
              e.preventDefault();
            }}>
          <div className="form-group has-feedback">
            <label for="search" className="sr-only">Search</label>
            <input type="text" className="form-control" name="search" id="search" placeholder="search" onChange={this.handleChange.bind(this)} />
            <span className="glyphicon glyphicon-search form-control-feedback" />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(SearchBar);

