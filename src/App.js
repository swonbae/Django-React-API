// import logo from './logo.svg';
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  function clicked() {
    alert("Clicked from App");
  }

  return (
    <div className="container">
      <FunctionComponent name="Swon" />
      <ClassComponent email="no-reply@gmail.com" myClick={clicked} />
    </div>
  );
}

export default App;
