import React from "react";

function FunctionComponent(props) {
  function Clickme() {
    alert("Button is Clicked");
  }

  return (
    <div>
      <h2>My name is {props.name}.</h2>
      <button className="btn btn-success" onClick={Clickme}>
        Click Me!
      </button>
    </div>
  );
}

export default FunctionComponent;
