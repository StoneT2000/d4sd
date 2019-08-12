import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class RoleCard extends Component {

  render() {
    return (
      <div id="role-card" className="position-relative">
      <div style={{"position":"absolute","top":"3em", "left":"3em"}}  >
        <h4>{this.props.title}</h4>
        <br/>
        <div className="row justify-content-center">
          <div className="col-1" style={{"padding":"0"}}>
            <img src={this.props.icon1} className="w-50"/>
          </div>
          <div className="col-11" style={{"padding":"0"}}>
            <h6>{this.props.txt1}</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-1" style={{"padding":"0"}}>
            <img src={this.props.icon2} className="w-50"/>
          </div>
          <div className="col-11" style={{"padding":"0"}}>
            <h6>{this.props.txt2}</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-1" style={{"padding":"0"}}>
            <img src={this.props.icon3} className="w-50"/>
          </div>
          <div className="col-11" style={{"padding":"0"}}>
            <h6>{this.props.txt3}</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-1" style={{"padding":"0"}}>
            <img src={this.props.icon4} className="w-50"/>
          </div>
          <div className="col-11" style={{"padding":"0"}}>
            <h6>{this.props.txt4}</h6>
          </div>
        </div>
        <br/>
        <a href={this.props.playbook}>View Playbook</a>
        </div>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default RoleCard;