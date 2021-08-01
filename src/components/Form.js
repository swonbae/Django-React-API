import React, { useState, useRef, useEffect } from "react";
import APIService from "../APIService";

function Form(props) {
  const [title, setTitle] = useState(props.article.title);
  const [description, setDescription] = useState(props.article.description);

  useEffect(() => {
    // Scroll to Insert Form
    !props.article.id && scrollTo(formRef)
  })

  const formRef = useRef(null)
  const scrollTo = (ref) => {
    ref.current && ref.current.scrollIntoView()
    return true
  }

  const updateArticle = () => {
    APIService.UpdateArticle(props.article.id, { title, description }).then(
      (res) => props.articleUpdated(res)
    );
  };

  const insertArticle = () => {
    APIService.InsertArticle({ title, description }).then(
      (res) => props.articleInserted(res)
    );
  };

  return (
    <div>
      <div ref={formRef} />
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Please Enter the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <br />

          {props.article.id ?
            <button className="btn btn-success" onClick={updateArticle}>
              Update Article
            </button>
            :
            <button className="btn btn-success" onClick={insertArticle}>
              Add Article
            </button>
          }

        </div>
      ) : null}
    </div>
  );
}

export default Form;
