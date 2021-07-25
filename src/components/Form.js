import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      posts: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   username: "SWon",
    // });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="container">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Username"
          value={this.state.username}
          onChange={this.usernameHandler}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Enter Your Password"
          value={this.state.password}
          onChange={this.passwordHandler}
        />
        <button className="btn btn-primary">Submit</button>

        {posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </div>
    );
  }
}

export default Form;
