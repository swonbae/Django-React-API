import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token REPLACE_WITH_YOUR_TOKEN",
      },
    })
      .then((res) => {
        if (res.ok) {
          setArticles(res.json());
        } else {
          console.log(res);
          setMessage(res.status + " - " + res.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(error);
      });
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <h1>Django and ReactJS</h1>
      <br />
      <br />
      {loading ? (
        <h2>Loading...</h2>
      ) : message ? (
        <h2>{message}</h2>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
}

export default App;
