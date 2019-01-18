import React, { Component } from 'react';
import Icon from './Icon';

import Board from './Board';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <menu className="flex flex-direction-column justify-content-space-between fancy-scrollbar">
          <ul>
            <li>
              <Icon name="Manage"/>
              <div className="caption">Manage</div>
            </li>
            <li className="selected">
              <Icon name="Boards"/>
              <div className="caption">Boards</div>
            </li>
            <li>
              <Icon name="Schedule"/>
              <div className="caption">Schedule</div>
            </li>
            <li>
              <Icon name="Reports"/>
              <div className="caption">Reports</div>
            </li>
          </ul>

          <div className="settings">
            <Icon name="Wheel"/>
            <div className="caption">Settings</div>
          </div>
        </menu>
        <Board/>
      </div>
    )
  }
}

export default Main;
