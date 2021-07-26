import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  article: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        article: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        article: {},
        error: "Error in data fetching",
      };
  }
};

function FetchDataUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/")
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.article.body}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchDataUseReducer;
