import React from "react";
import Form from "./Form";
import APIService from "../APIService";

function ArticleList(props) {
  const { articles, selectedArticle, articleUpdated, articleInserted } = props;

  const editBtn = (article) => {
    props.editBtn(article);
  };

  const deleteBtn = (article) => {
    APIService.DeleteArticle(article.id)
      .then(props.deleteBtn(article))
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
                  <button className="btn btn-danger" onClick={() => deleteBtn(article)}>Delete</button>
                </div>
              </div>
              {selectedArticle && selectedArticle.id === article.id && (
                <Form
                  article={selectedArticle}
                  articleUpdated={articleUpdated}
                />
              )}
              <hr className="hrclass" />
            </div>
          );
        })
      }
      {
        selectedArticle && !selectedArticle.id &&
        <Form
          article={selectedArticle}
          articleInserted={articleInserted}
        />
      }
    </div>
  );
}

export default ArticleList;
