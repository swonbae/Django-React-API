const API_URL_ARTICLE = "http://localhost:8000/api/articles/";
const USER_TOKEN = "REPLACE_WITH_YOUR_TOKEN";
const HEADER = {
  'Content-Type': "application/json",
  'Authorization': `Token ${USER_TOKEN}`,
};

export default class APIService {
  static FetchArticles() {
    return fetch(API_URL_ARTICLE, {
      method: "GET",
      headers: HEADER,
    });
  }

  static InsertArticle(body) {
    return fetch(API_URL_ARTICLE, {
      method: "POST",
      headers: HEADER,
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static UpdateArticle(article_id, body) {
    return fetch(`${API_URL_ARTICLE}${article_id}/`, {
      method: "PUT",
      headers: HEADER,
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static DeleteArticle(article_id) {
    return fetch(`${API_URL_ARTICLE}${article_id}/`, {
      method: "DELETE",
      headers: HEADER,
    })
  }
}
