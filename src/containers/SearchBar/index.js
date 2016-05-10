import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from 'actions/filterContacts'

import { styles } from './styles.scss';

export class SearchBar extends Component {


  handleChange(event) {
    this.props.filterContacts(event.target.value, this.state);
  }

  handleClick(event) {
    let filter = event.target.innerHTML;
    this.state = `FILTER ${filter}`.split(' ').join('_').toUpperCase();
  }

  render() {
    this.state = 'FILTER_FIRST_NAME';
    return (
      <div className={`${styles}`}>
        <form action="" className="search-form form-inline" onSubmit={e => {
          e.preventDefault();
        }}>
          <div className="form-group has-feedback">
            <label for="search" className="sr-only">Search</label>
            <input type="text" className="form-control" name="search" id="search" placeholder="search" onChange={this.handleChange.bind(this)} />
            <span className="glyphicon glyphicon-search form-control-feedback" />
          </div>

          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Filter Search
              <span className="caret"></span></button>
            <ul className="dropdown-menu">
              <li onClick={this.handleClick.bind(this)}><a>First Name</a></li>
              <li onClick={this.handleClick.bind(this)}><a>Last Name</a></li>
              <li onClick={this.handleClick.bind(this)}><a>Date Of Birth</a></li>
              <li onClick={this.handleClick.bind(this)}><a>Phone</a></li>
              <li onClick={this.handleClick.bind(this)}><a>Email</a></li>
              <li onClick={this.handleClick.bind(this)}><a>Notes</a></li>
            </ul>
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
