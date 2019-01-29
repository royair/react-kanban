import React, { Component } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';

import './AddCollaboratorIcon.scss'

class AddCollaboratorIcon extends Component {
  render() {
    const { size } = this.props;

    return (
      <div className={classNames("AddCollaboratorIcon", size)}>
        <Icon name="Plus"/>
      </div>
    )
  }
}

AddCollaboratorIcon.defaultProps = {
  size: 'md'
};


export default AddCollaboratorIcon;
