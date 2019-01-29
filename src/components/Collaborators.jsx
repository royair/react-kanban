import React, { Component } from 'react';

import ProfileCircle from './ProfileCircle';
import './Collaborators.scss';
import AddCollaboratorIcon from "./card/AddCollaboratorIcon";

class Collaborators extends Component {
  render() {
    return (
      <div className="Collaborators">
        <ul>
          <li><ProfileCircle/></li>
          <li><ProfileCircle/></li>
          <li><ProfileCircle/></li>
          <li><AddCollaboratorIcon/></li>
        </ul>
      </div>
    )
  }
}

export default Collaborators;
