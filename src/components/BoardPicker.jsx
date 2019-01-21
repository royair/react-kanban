import React, { Component } from 'react';

import Chevron from './Chevron';

import './BoardPicker.scss';

class BoardPicker extends Component {
  render() {
    return (
      <div className="BoardPicker">
        <span className="label">Studio Board</span>
        <Chevron/>
      </div>
    )
  }
}

export default BoardPicker;
