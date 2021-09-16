import React from 'react';
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
const Login = () => {
    const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
    return (
      <div className="help">
      <div className="login">
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
            <form onSubmit={handleClick}>
              <div className="user-box">
               <input
                 type="email"
                 required
                 className="loginInput"
                 ref={email}
               />
               <label>Email</label>
              </div>
              <div class="user-box">
                <input
                  type="password"
                  required
                  minLength="6"
                  className="loginInput"
                  ref={password}
                />
                <label>Password</label>
              </div>
              <a  disabled={isFetching} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Forgot Password"
                )}
              </a>
              <a  disabled={isFetching} style={{marginRight:"28px"}} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Login"
                )}
              </a>
               <a  disabled={isFetching} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Signup"
                )}
              </a>
            </form>
          </div>
          </div>
          </div>
          </div>
    );
}

export default Login;
