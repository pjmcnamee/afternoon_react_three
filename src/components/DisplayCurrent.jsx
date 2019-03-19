import React, { Component } from "react";
import data from "../data";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import DeleteButton from "./DeleteButton";

export class DisplayCurrent extends Component {
  constructor() {
    super();
    this.state = {
      indexInArray: 0,
      dataHolder: data
    };
  }

  increaseIndex = () => {
    if (this.state.indexInArray + 1 !== this.state.dataHolder.length) {
      let newIndex = this.state.indexInArray + 1;

      this.setState({
        indexInArray: newIndex
      });
    }
  };

  decreaseIndex = () => {
    if (this.state.indexInArray !== 0) {
      let newIndex = this.state.indexInArray - 1;
      this.setState({
        indexInArray: newIndex
      });
    }
  };

  deleteIndex = () => {
    const deleteDataArray = this.state.dataHolder.splice(this.state.indexInArray, 1);

    this.setState({
      dataHolder: deleteDataArray
    });
  };

  render() {
    return (
      <div>
        <div className="card">
          <h1>
            {this.state.dataHolder[this.state.indexInArray].name.first}{" "}
            {this.state.dataHolder[this.state.indexInArray].name.last}
          </h1>
          <h2>
            From:{" "}
            <span>
              {this.state.dataHolder[this.state.indexInArray].city},{" "}
              {this.state.dataHolder[this.state.indexInArray].country}
            </span>
          </h2>
          <h2>
            Job Title: {this.state.dataHolder[this.state.indexInArray].title}
          </h2>
          <h2>
            Employer: {this.state.dataHolder[this.state.indexInArray].employer}
          </h2>
          <ol>
            {" "}
            Favorite Movies:
            <li>
              {this.state.dataHolder[this.state.indexInArray].favoriteMovies[0]}
            </li>
            <li>
              {this.state.dataHolder[this.state.indexInArray].favoriteMovies[1]}
            </li>
            <li>
              {this.state.dataHolder[this.state.indexInArray].favoriteMovies[2]}
            </li>
          </ol>
          <p>{this.state.indexInArray + 1}/25</p>
        </div>
        <div className="buttons">
          <PreviousButton decreaseIndex={this.decreaseIndex} />
          <NextButton increaseIndex={this.increaseIndex} />
          <DeleteButton deleteIndex={this.deleteIndex} />
        </div>
      </div>
    );
  }
}

export default DisplayCurrent;
