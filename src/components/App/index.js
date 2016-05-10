import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import VisibleContacts from 'containers/VisibleContacts';
import AddContactButton from 'components/AddContactButton';
import SearchBar from 'containers/SearchBar';

export default class App extends Component {
  render() {
    return (
			<div>
        <NavBar />
        <SearchBar />
        <AddContactButton />
        <VisibleContacts />
      </div>
    );
  }
}