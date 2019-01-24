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
          className="header">
          <BoardPicker/>
          <Collaborators/>
        </div>
        <Board/>
      </div>
    )
  }
}

export default Boards;
