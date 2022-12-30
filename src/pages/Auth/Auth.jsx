import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../Actions/AuthAction";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    university: "",
    address: "",
    password: "",
    confirmpass: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [confirmPass, setConfirmPass] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      university: "",
      address: "",
      password: "",
      confirmpass: "",
    });
  };
  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Media Crunch</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Sign Up" : "Log In"}</h3>

          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            {isSignup && (
              <input
                type="email"
                className="infoInput"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={handleChange}
              />
            )}
            <div>
              <input
                type="text"
                className="infoInput"
                name="username"
                value={data.username}
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
          </div>

          {isSignup && (
            <div>
              <input
                type="text"
                className="infoInput"
                name="university"
                value={data.university}
                placeholder="University"
                onChange={handleChange}
              />

              <input
                type="text"
                className="infoInput"
                name="address"
                value={data.address}
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handleChange}
            />
            {isSignup && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                value={data.confirmpass}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "15px",
              alignSelf: "flex-end",
              marginRight: "5px",
              fontWeight: "bold",
            }}
          >
            *Confirm password is not matched
          </span>
          <div>
            <span
              className="text"
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignup((prev) => !prev);
                resetForm();
              }}
            >
              {isSignup
                ? "Already have an account. Login!"
                : "Don't have a account? Sign up"}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
