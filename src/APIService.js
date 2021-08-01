const API_URL_ARTICLE = "http://localhost:8000/api/articles/";
const API_URL_LOGIN = "http://localhost:8000/auth/";

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

function getHeader() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Token ${getCookie("userToken")}`,
  };

  return header;
}

export default class APIService {
  static FetchArticles() {
    return fetch(API_URL_ARTICLE, {
      method: "GET",
      headers: getHeader(),
    });
  }

  static InsertArticle(body) {
    return fetch(API_URL_ARTICLE, {
      method: "POST",
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static UpdateArticle(article_id, body) {
    return fetch(`${API_URL_ARTICLE}${article_id}/`, {
      method: "PUT",
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  static DeleteArticle(article_id) {
    return fetch(`${API_URL_ARTICLE}${article_id}/`, {
      method: "DELETE",
      headers: getHeader(),
    });
  }

  static LoginUser(body) {
    return fetch(API_URL_LOGIN, {
      method: "POST",
      headers: getHeader(),
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
}
