import React, { Component } from 'react';
import '../styles/SideZones.css';

class Graveyard extends Component {
  render() {
    return (
      <div className="graveyard">
      <div className="innerBox">Graveyard<br/>{this.props.graveyard}</div>
      </div>
    );
  }
}

export default Graveyard;
