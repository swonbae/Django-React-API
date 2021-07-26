import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("text");
  const [info, setInfo] = useState({ name: "", email: "" });
  const [articles, setArticles] = useState([
    "Article One",
    "Article Two",
    "Article Three",
  ]);

  const addArticle = () => {
    setArticles([...articles, "New Article"]);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Count
      </button>

      <h2>{text}</h2>
      <button
        className="btn btn-success"
        onClick={() => setText("This text is changed")}
      >
        Change Text
      </button>

      <br />
      <br />

      <input
        type="text"
        className="form-control"
        value={info.name}
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
      />
      <input
        type="text"
        className="form-control"
        value={info.email}
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
      />
      <h2>Name: {info.name}</h2>
      <h2>Email: {info.email}</h2>

      <br />

      {articles.map((article) => {
        return <h2>{article}</h2>;
      })}
      <button className="btn btn-primary" onClick={addArticle}>
        Add Article
      </button>
    </div>
  );
}

export default CounterHook;
