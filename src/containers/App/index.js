import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import AddContact from 'containers/AddContact';
// import ContactsTable from 'components/ContactsTable';
import VisibleContacts from 'containers/VisibleContacts';
import AddContactButton from 'components/AddContactButton';

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar></NavBar>
				<AddContactButton></AddContactButton>
				<AddContact></AddContact>
				<VisibleContacts></VisibleContacts>
			</div>
		);
	}
}