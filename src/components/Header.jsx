import React, { Component } from 'react';
import Search from './Search';
import UserProfile from './UserProfile';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="logo"><h1>frello</h1></div>
        <nav>
          <Search/>
          <UserProfile/>
        </nav>
      </div>
    )
  }
}

export default Header;
