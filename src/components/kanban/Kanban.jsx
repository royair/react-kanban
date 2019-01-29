import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Board from '../board/Board';

import './Kanban.scss'

class Kanban extends Component {

  render() {
    let { selectedBoard } = this.props.kanban;

    return (
      <div className="Kanban">
        <Board board={selectedBoard}/>
      </div>
    )
  }
}

export default observer(Kanban);
