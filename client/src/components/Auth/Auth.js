import React, { useState, Fragment } from "react";

import { signInWithGoogle } from "../../firebase/util";
import Login from "./Login";
import Register from "./Register";
import axios from "../../config/axios";
import Navbar from "../Navbar/Navbar";

import "./Auth.scss";

const Auth = () => {
  const [toggle, setToggle] = useState("login");
  const btnStyle = {
    left: toggle === "login" ? "0px" : "110px"
  };

  const googleClick = async () => {
    const result = await signInWithGoogle();
    const response = await axios.post("/auth", {
      displayName: result.user.displayName,
      email: result.user.email,
      phone: result.user.phoneNumber,
      userId: result.user.uid
    });
    console.log(response.data);
  };
  return (
    <Fragment>
      <Navbar />
      <div id="auth">
        <div className="form-box">
          <div className="button-box">
            <div id="btn" style={btnStyle}></div>
            <button className="toggle-btn" onClick={() => setToggle("login")}>
              Log In
            </button>
            <button
              className="toggle-btn"
              onClick={() => setToggle("register")}
            >
              Register
            </button>
          </div>
          <div className="social-icons text-center">
            <i className="fab social-icon fa-facebook"></i>
            <i className="fab social-icon fa-google mx-2" onClick={googleClick}></i>
            <i className="fab social-icon fa-twitter"></i>
          </div>
          {toggle === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;