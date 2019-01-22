import React, { Component } from 'react';

import Lists from './Lists';

import './Board.scss';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <Lists/>
      </div>
    )
  }
}

export default Board;
