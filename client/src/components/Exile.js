import React, { Component } from 'react';
import '../styles/SideZones.css';

class Exile extends Component {
  render() {
    return (
      <div className="exile">
      <div className="innerBox">Exile<br/>{this.props.exile}</div>
      </div>
    );
  }
}

export default Exile;
