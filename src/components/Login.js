import React, { useState } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["userToken"]);
  let history = useHistory();

  useEffect(() => {
    if (token["userToken"]) {
      history.push("/articles");
    }
  }, [token]);

  const getTimeAfterMinutes = (minutes) => {
    let expires = new Date();
    expires.setTime(expires.getTime() + minutes * 60 * 1000);

    return expires;
  };

  const loginBtn = () => {
    APIService.LoginUser({ username, password })
      .then((res) =>
        setToken("userToken", res.token, {
          path: "/",
          expires: getTimeAfterMinutes(15),
        })
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <br />
      <br />

      <h1>Please Login</h1>

      <br />
      <br />

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Please enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Please enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={loginBtn}>
        Login
      </button>
    </div>
  );
}

export default Login;
