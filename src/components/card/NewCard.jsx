import React, { Component } from 'react';

import ButtonAdd from "../ButtonAdd";

import './NewCard.scss';
import Icon from "../Icon";

class NewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      value: ''
    }
  }

  handleToggle = () => {
    this.setState((oldState) => ({
      isOpen: !oldState.isOpen
    }))
  };

  handleChange = (e) => {
    let { value } = e.target;

    this.setState(() => ({
      value
    }))
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { value } = this.state;

    //abort if textarea is empty
    if (!value) return;

    // add card
    this.props.list.addCard(value);

    //reset textarea state
    this.setState(() => ({ value: '' }));
  };

  render() {
    let { isOpen } = this.state;

    return (
      <div className="NewCard">

        {isOpen
          ? <form>
            <textarea type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                      placeholder="Enter a title for this card..."/>

            <div className="actions">
              <button className="primary" onClick={this.handleSubmit}> Add
              </button>
              <Icon name="Clear" fill="#afb0c3" onClick={this.handleToggle}/>
            </div>

          </form>
          : <ButtonAdd label="Add card" onClick={this.handleToggle}/>}
      </div>
    )
  }
}

NewCard.defaultProps = {};

export default NewCard;
