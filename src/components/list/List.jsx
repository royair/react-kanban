import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Icon from '../Icon';
import Card from '../card/Card';
import NewCard from '../card/NewCard';

import './List.scss';

class List extends Component {
  render() {
    let { list }        = this.props;
    let { name, cards } = list;
    let cardsElem       = cards.map((card) => <Card key={card.id}
                                                    card={card}/>)


    return (
      <div className="List">

        <div className="header">
          <span className="title">{name}</span>
          <div className="actions">
            <Icon name="MoreVert" fill="#7a838f"></Icon>
          </div>
        </div>

        <div className="main fancy-scrollbar">
          {cardsElem}
        </div>

        <div className="footer">
          <div className="actions">
            <NewCard list={list}/>
          </div>
        </div>
      </div>
    )
  }
}

export default observer(List);
