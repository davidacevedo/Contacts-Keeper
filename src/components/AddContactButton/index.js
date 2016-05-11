import React, { Component } from 'react';

import { styles } from './styles.scss';

import AddContact from 'containers/AddContact';

export default class AddContactButton extends Component {
  render() {
    return (
      <div className='add-contact-button'>
        <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">Add Contact</button>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Add Contact</h4>
                </div>
                <div className="modal-body">
                  <AddContact />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>
        </div>
    )
  }
}