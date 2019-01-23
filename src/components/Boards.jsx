import React, { Component } from 'react';

import BoardPicker from './BoardPicker';
import Collaborators from './Collaborators';
import Board from './Board';

import './Boards.scss'

class Boards extends Component {
  render() {
    return (
      <div className="Boards">
        <div
          className="flex justify-content-space-between align-items-center flex-shrink-0">
          <BoardPicker/>
          <Collaborators/>
        </div>
        <Board/>
      </div>
    )
  }
}

export default Boards;
