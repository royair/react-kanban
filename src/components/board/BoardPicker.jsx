import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Chevron from '../Chevron';

import './BoardPicker.scss';

class BoardPicker extends Component {
  render() {
    let { selectedBoard } = this.props.store.kanban;

    return (
      <div className="BoardPicker">
        <span className="name">{selectedBoard.name}</span>
        <Chevron/>
      </div>
    )
  }
}

BoardPicker.defaultProps = {
};


export default inject('store')(observer(BoardPicker));
