import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import SearchBar from 'components/SearchBar';
import ContactsTable from 'components/ContactsTable'

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar></NavBar>
				<SearchBar></SearchBar>
				<ContactsTable></ContactsTable>
			</div>
		);
	}
}