import React, { Component } from 'react'

export class DeleteButton extends Component {
  render() {
	return (
	  <button onChange={() => this.props.deleteIndex()}>Delete</button>
	)
  }
}

export default DeleteButton
