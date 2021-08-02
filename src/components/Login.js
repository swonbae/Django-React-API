import React, { useState } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["userToken"]);
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState();
  let history = useHistory();

  useEffect(() => {
    if (token["userToken"]) {
      history.push("/articles");
    }
  }, [token]);

  useEffect(() => {
    setMessage();
  }, [isLogin]);

  const getTimeAfterMinutes = (minutes) => {
    let expires = new Date();
    expires.setTime(expires.getTime() + minutes * 60 * 1000);

    return expires;
  };

  const loginBtn = () => {
    APIService.LoginUser({ username, password })
      .then((res) =>
        res.token
          ? setToken("userToken", res.token, {
              path: "/",
              expires: getTimeAfterMinutes(15),
            })
          : setMessage("Cannot Login with Username and Password")
      )
      .catch((error) => console.error(error));
  };

  const registerBtn = () => {
    APIService.RegisterUser({ username, password })
      .then(() => loginBtn())
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <br />
      <br />
      {isLogin ? <h1>Please Login</h1> : <h1>Please Register</h1>}
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

      {message && <div className="alert text-danger">{message}</div>}

      {isLogin ? (
        <button className="btn btn-primary" onClick={loginBtn}>
          Login
        </button>
      ) : (
        <button className="btn btn-primary" onClick={registerBtn}>
          Register
        </button>
      )}

      <div className="mb-3">
        <br />
        <br />
        {isLogin ? (
          <h5>
            If You Don't Have Account, Please{" "}
            <button
              className="btn btn-secondary"
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>{" "}
            Here
          </h5>
        ) : (
          <h5>
            If You Have Account, Please{" "}
            <button
              className="btn btn-secondary"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>{" "}
            Here
          </h5>
        )}
      </div>
    </div>
  );
}

export default Login;
