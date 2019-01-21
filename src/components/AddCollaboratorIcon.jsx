import React, { Component } from 'react';

import Icon from './Icon';

import './AddCollaboratorIcon.scss'

class AddCollaboratorIcon extends Component {
  render() {
    return (
      <div className="AddCollaboratorIcon">
        <Icon name="Plus"/>
      </div>
    )
  }
}

export default AddCollaboratorIcon;
