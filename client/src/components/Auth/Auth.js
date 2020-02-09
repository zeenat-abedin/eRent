import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/util";
import Login from "./Login";
import Register from "./Register";

import "./Auth.scss";

const Auth = () => {
  const [toggle, setToggle] = useState("login");
  const btnStyle = {
    left: toggle === "login" ? "0px" : "110px"
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
            <i className="fab fa-google mx-2" onClick={signInWithGoogle}></i>
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
