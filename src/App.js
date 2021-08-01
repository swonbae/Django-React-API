import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import APIService from "./APIService";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    APIService.FetchArticles()
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          setMessage(`Cannot fetch data: ${res.statusText} (${res.status})`);
        }
      })
      .then((res) => setArticles(res))
      .catch((error) => {
        setMessage(error.toString());
        setLoading(false);
      });
  }, []);

  const editBtn = (article) => {
    setSelectedArticle(article);
  };

  const addBtn = () => {
    setSelectedArticle({ 'title': '', 'description': '' });
  };

  const deleteBtn = (deletedArticle) => {
    const newArticles = articles.filter(article => {
      if (article.id === deletedArticle.id) {
        return false
      }
      else {
        return true;
      }
    })

    setArticles(newArticles);
  };

  const articleUpdated = (updatedArticle) => {
    const newArticles = articles.map((article) => {
      if (article.id === updatedArticle.id) {
        return updatedArticle;
      } else {
        return article;
      }
    });

    setArticles(newArticles);
    setSelectedArticle(null);
  };

  const articleInserted = (insertedArticle) => {
    const newArticles = [...articles, insertedArticle]

    setArticles(newArticles);
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Django and ReactJS</h1>
          <br />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={addBtn}>Add Article</button>
        </div>
      </div>
      <br />
      {
        loading ? (
          <h2>Loading...</h2>
        ) : message ? (
          <h2>{message}</h2>
        ) : (
          <ArticleList
            articles={articles}
            editBtn={editBtn}
            deleteBtn={deleteBtn}
            selectedArticle={selectedArticle}
            articleUpdated={articleUpdated}
            articleInserted={articleInserted}
          />
        )
      }
    </div>
  );
}

export default App;
