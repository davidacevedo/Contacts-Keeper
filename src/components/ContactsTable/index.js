import React, { Component } from 'react';

import { styles } from './styles.scss';

export default class ContactsTable extends Component {
    render() {
        return (
            <div className={`${styles}`}>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Date of Birth</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Notes</td>
                    </tr>
                    <tr>
                        <td>David</td>
                        <td>Acevedo</td>
                        <td>11/14/1994</td>
                        <td>5625476811</td>
                        <td>david.acevedo07@gmail.com</td>
                        <td>He's a construction worker</td>
                    </tr>
                </table>
            </div>
        )
    }
}