import React, { Component } from 'react';
import classNames from 'classnames';

import Icon from "./Icon";

import './Chevron.scss';

class Chevron extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  onClickHandler = () => {
    this.setState((oldState) => ({ isOpen: !oldState.isOpen }));
  };

  render() {
    return (
      <div className={classNames('Chevron', { open: this.state.isOpen })}
           onClick={this.onClickHandler}>
        <Icon name="ChevronDown"/>
      </div>
    )
  }
}

export default Chevron;
