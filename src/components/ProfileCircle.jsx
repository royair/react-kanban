import React, { Component } from 'react';
import Icon from './Icon';

import './ProfileCircle.scss';

class ProfileCircle extends Component {
  render() {

    return (
      <div className="ProfileCircle">
        <Icon name="Person" fill="#fff"/>
      </div>
    )
  }
}

export default ProfileCircle;
