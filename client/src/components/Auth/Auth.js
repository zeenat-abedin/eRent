import React, { useState } from "react";

import { signInWithGoogle } from "../../firebase/util";
import Login from "./Login";
import Register from "./Register";
import axios from "../../config/axios";

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
    <div>
      <div className="hero">
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
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google mx-2" onClick={googleClick}></i>
            <i className="fab fa-twitter"></i>
          </div>
          {toggle === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default Auth;

/*

 btn.style.left = "110px";
btn.style.left = "0";
*/
