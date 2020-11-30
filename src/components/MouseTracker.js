import React, { Component } from 'react';

import '../styles/MouseTracker.css';
import cursor from '../images/plate.png';


class MouseTracker extends Component {
    constructor(props) {
      super(props);
      this.handlePositionChange = this.handlePositionChange.bind(this);

      this.state = {
      top: 0,
      left: 0,
    };
  }

    handlePositionChange = (e) => {
      this.setState({
        top: e.clientX,
        left: e.clientY
      });
    }

    render() {
      return (
        <div className="cursor" onMouseMove={this.handlePositionChange}
        style={this.state}><img src={cursor} alt="cursor"/></div>
        )
    }

}

export default MouseTracker;