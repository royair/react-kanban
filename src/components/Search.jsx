import React, { Component } from 'react';
import Icon from './Icon';

import './Search.scss';

class Search extends Component {

  render() {
    return (
      <div className="Search">
        <Icon name="Magnifier"/>
        <input placeholder="Search for tasks" type="text"/>
      </div>
    )
  }
}

export default Search;
