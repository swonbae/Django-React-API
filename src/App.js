import "./App.css";
import ComponentA from "./components/ComponentA";
import React from "react";

export const MyContext = React.createContext();

function App() {
  return (
    <div className="container">
      <MyContext.Provider value="This is value from context">
        <ComponentA />
      </MyContext.Provider>
    </div>
  );
}

export default App;
