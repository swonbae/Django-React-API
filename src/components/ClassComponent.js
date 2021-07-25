import React, { Component } from "react";

class ClassComponent extends Component {
  clicked() {
    alert("Class Component Clicked");
  }

  render() {
    return (
      <div>
        <h2 className="bg-primary text-white text-center">
          My email is {this.props.email}
        </h2>
        <button className="btn btn-primary" onClick={this.props.myClick}>
          Click
        </button>
      </div>
    );
  }
}

export default ClassComponent;
