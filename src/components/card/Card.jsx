import React, { Component } from 'react';

import Icon from '../Icon';
import AddCollaboratorIcon from './AddCollaboratorIcon';
import Priority from '../Priority';

import './Card.scss';

class Card extends Component {
  render() {
    let {title} = this.props.card;

    return (
      <div className="Card">
        <Priority/>
        <div className="label">{title}</div>

        <div className="footer">
          <div className="info">
            <span className="item">
              <Icon name="Comment"/>
              <span className="label">1</span>
            </span>
            <span className="item">
              <Icon name="Attachment"/>
              <span className="label">2</span>
            </span>
          </div>
          <div className="assignees">
            <AddCollaboratorIcon size="sm"/>
          </div>
        </div>

      </div>
    )
  }
}

export default Card;
