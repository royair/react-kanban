import React, { Component } from 'react';
import Icon from './Icon';
import ProfileCircle from './ProfileCircle';

import './UserProfile.scss';

class UserProfile extends Component {
  render() {
    return (
      <div className="UserProfile">
        <ul>
          <li><Icon name="Mail"/></li>
          <li><Icon name="Notification"/></li>
          <li>
            <span className="username">M. Thompson</span>
            <ProfileCircle/>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserProfile;
