import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import classnames from 'classnames';

import Icon from '../Icon';
import ButtonAdd from '../ButtonAdd';

import './NewList.scss';

class NewList extends Component {
  constructor(props) {
    super(props);

    this.board = this.props.store.kanban.selectedBoard;
    this.state = {
      isOpen: false,
      value: ''
    }
  }

  handleToggle = () => {
    this.setState((oldState) => ({ isOpen: !oldState.isOpen }));
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState(() => ({
      value
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //abort if no value
    if (!this.state.value) return;

    this.board.addList(this.state.value);
    this.setState(() => ({
      isOpen: false,
      value: ''
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={classnames("NewList", { isOpen })}>
        {isOpen
          ? <form>
            <input type="text"
                   placeholder="Enter list title..."
                   value={this.state.value}
                   onChange={this.handleChange}/>
            <div className="actions">

              <button className="primary" onClick={this.handleSubmit}>Add
              </button>

              <Icon name="Clear" fill="#afb0c3" onClick={this.handleToggle}/>
            </div>
          </form>
          : <ButtonAdd label="Add list" onClick={this.handleToggle}/>}
      </div>
    )
  }
}

NewList.defaultProps = {};

export default inject('store')(observer(NewList));
