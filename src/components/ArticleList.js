import React from "react";
import Form from "./Form";

function ArticleList(props) {
  const { articles, selectedArticle, updateArticles } = props;

  const editBtn = (article) => {
    props.editBtn(article);
  };

  return (
    <div>
      {articles &&
        Array.isArray(articles) &&
        articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div className="row">
                <div className="col-md-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => editBtn(article)}
                  >
                    Edit
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
              {selectedArticle && selectedArticle.id === article.id && (
                <Form
                  article={selectedArticle}
                  updateArticles={updateArticles}
                />
              )}
              <hr className="hrclass" />
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
