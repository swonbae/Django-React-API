import React from "react";

function ArticleList(props) {
  const { articles } = props;

  return (
    <div>
      {articles && Array.isArray(articles)
        ? articles.map((article) => {
            return (
              <div key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <hr />
              </div>
            );
          })
        : articles.detail && <h2>Error: {articles.detail}</h2>}
    </div>
  );
}

export default ArticleList;
