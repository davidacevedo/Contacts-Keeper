import React, { Component } from 'react';

import { styles } from './styles.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <ul>
          <li><a>Contacts Keeper</a></li>
        </ul>
      </div>
    )
  }
}