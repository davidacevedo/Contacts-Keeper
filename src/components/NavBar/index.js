import React, { Component } from 'react';

import { styles } from './styles.scss';

export default class NavBar extends Component {
	render() {
		return (
      <div className={`${styles}`}>
				<ul>
					<li><a>Contacts Keeper</a></li>
				</ul>
			</div>
		)
	}
}