import React, { Component } from 'react';

import { styles } from './styles.scss';

export default class ContactsTable extends Component {
    render() {
        return (
            <div className={`${styles}`}>
                <h1>I am the contacts table</h1>
            </div>
        )
    }
}