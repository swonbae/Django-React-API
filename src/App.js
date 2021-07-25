// import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <FunctionComponent name="Swon" lastname="Bae" />
      <ClassComponent email = "no-reply@gmail.com" />
    </div>
  );
}

export default App;
