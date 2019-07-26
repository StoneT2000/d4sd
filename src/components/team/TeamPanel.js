import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import photo from '../../img/kashdog.jpg';
import '../style.css';

class TeamPanel extends Component {
  render() {
    return (
      <div>
        <div classNameName="row align-items-center">
          <div className="col-4">
            <img className="mobile rounded-circle w-100" src={photo}/>
          </div>
          <div className="col-8">Aneesh Kashalikar</div>
        </div>
        <p>You don't have a team yet</p>
        <button className="btn-inverted font-weight-bold text-md ls-sm">Create a Team</button>
      </div>
    );
  }
}

export default TeamPanel;