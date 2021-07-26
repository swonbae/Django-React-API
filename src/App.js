import "./App.css";
import React from "react";
import ComponentA from "./components/ComponentA";
// import Counter from "./components/Counter";
// import CounterHook from "./components/CounterHook";
// import FetchData from "./components/FetchData";

export const MyContext = React.createContext();

function App() {
  return (
    <div className="container">
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FetchData /> */}
      <MyContext.Provider value="This is context value">
        <ComponentA />
      </MyContext.Provider>
    </div>
  );
}

export default App;
