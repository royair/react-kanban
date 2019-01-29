import React, { Component } from 'react';
import { observer } from 'mobx-react';

import BoardPicker from './BoardPicker';
import Collaborators from '../Collaborators';
import Lists from '../list/Lists';

import './Board.scss';

class Board extends Component {
  render() {
    let { lists, collaborators } = this.props.board;

    return (
      <div className="Board">
        <div className="header">
          <BoardPicker/>
          <Collaborators collaborators={collaborators}/>
        </div>
          <Lists lists={lists}/>
      </div>
    )
  }
}

Board.defaultPRops = {
  lists: []
};

export default observer(Board);
