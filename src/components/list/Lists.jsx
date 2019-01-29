import React, { Component } from 'react';
import { observer } from 'mobx-react';

import List from './List';
import NewList from './NewList';

import './Lists.scss';

class Lists extends Component {
  render() {
    let { lists } = this.props;
    let listElem  = lists.map((list) => (<List list={list}
                                               key={list.id}/>));

    return (
      <div className="lists-wrapper fancy-scrollbar">
        <div className="Lists ">
          {listElem}
          <NewList/>
        </div>
      </div>
    )
  }
}

Lists.defaultProps = {
  lists: []
};

export default observer(Lists);
