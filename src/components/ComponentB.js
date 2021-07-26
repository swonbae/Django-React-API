import React, { useContext } from "react";
import { MyContext } from "../App";
// import { MyContext } from "../App";

function ComponentB() {
  const data = useContext(MyContext);
  return (
    <div>
      {/* <MyContext.Consumer>
        {(data) => {
          return <h2>{data} using Context</h2>;
        }}
      </MyContext.Consumer> */}

      <h1>{data} using useContext</h1>
    </div>
  );
}

export default ComponentB;
