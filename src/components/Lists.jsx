import React, { Component } from 'react';

import List from './List';

import './Lists.scss';

class Lists extends Component {
  render() {
    return (
      <div className="Lists">
        <List/>
        <List/>
        <List/>
        <List/>
      </div>
    )
  }
}

export default Lists;
