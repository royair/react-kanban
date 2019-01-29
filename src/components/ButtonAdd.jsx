import React, { Component } from 'react';

import Icon from "./Icon";

import './ButtonAdd.scss';

class ButtonAdd extends Component {
  render() {
    let { label, onClick } = this.props;
    return (
      <div className="ButtonAdd" onClick={onClick}>
        <span className="label">{label}</span>
        <Icon name="CircleWithPlus" fill="#afb0c3" width="10"/>
      </div>
    )
  }
}

ButtonAdd.defaultProps = {};

export default ButtonAdd;
