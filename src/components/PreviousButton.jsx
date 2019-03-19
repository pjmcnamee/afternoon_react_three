import React, { Component } from "react";

export class PreviousButton extends Component {

	decreaseIndex = (index) => {

	}

  render() {
    return <h3 onClick={() => this.props.decreaseIndex()}> {'< Previous'}</h3>;
  }
}

export default PreviousButton;
