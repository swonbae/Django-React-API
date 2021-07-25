import React, { Component } from "react";

export class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: "Swon Bae",
    };
  }

  clickedMe() {
    this.setState({
      name: this.state.name === "Swon Bae" ? "John Doe" : "Swon Bae",
    });
  }

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white text-center">{this.state.name}</h1>
        <button className="btn btn-success" onClick={() => this.clickedMe()}>
          Change Text
        </button>
      </div>
    );
  }
}

export default Name;
