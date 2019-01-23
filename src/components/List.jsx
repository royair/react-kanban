import React, { Component } from 'react';

import Icon from './Icon';
import Card from './Card';

import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="header">
          <span className="title">Backlog</span>
          <div className="actions">
            <Icon name="MoreVert" fill="#7a838f"></Icon>
          </div>
        </div>
        <div className="main fancy-scrollbar">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
        <div className="footer">

          <div className="actions">
            <div className="add-task">
              <span className="label">Add task</span>
              <div className="add-task-icon">
                <Icon name="Plus" fill="#afb0c3" width="10px"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default List;
