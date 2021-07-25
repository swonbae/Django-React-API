import "./App.css";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Form from "./components/Form";
import MyFragement from "./components/MyFragement";
import Name from "./components/Name";

function App() {
  function clicked() {
    alert("Clicked from App");
  }

  return (
    <div className="container">
      {/* <Name />
      <Example names={["Python", "Java", "JavaScript", "C#"]} />
      <Example2 names={["React", "React Native", "Django"]} />
      <Form /> */}
      <MyFragement />
    </div>
  );
}

export default App;
