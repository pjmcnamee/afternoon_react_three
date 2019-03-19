import React, { Component } from "react";

export class NextButtons extends Component {
  render() {
    return <h3 onClick={() => this.props.increaseIndex()}> {'Next >'} </h3>;
  }
}

export default NextButtons;
