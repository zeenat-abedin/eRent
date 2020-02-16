import React, { useState } from "react";
import { useAlert } from 'react-alert'

import Input from "../shared/Input";
import { auth } from "../../firebase/util";

const Login = () => {
  const alert = useAlert()
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = user;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      alert.show(error.message)
    }
  };
  const { email, password } = user;
  return (
    <form onSubmit={handleSubmit} id="login" className="custom-input-group">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        classNam="input-field"
        style={{ margin: "15px 0" }}
        value={email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        classNam="input-field"
        style={{ margin: "15px 0" }}
        value={password}
        onChange={handleChange}
        required
      />
      <input
        type="submit"
        value="Log in"
        className="submit-button"
        style={{ marginTop: "40px" }}
      />
    </form>
  );
};

export default Login;
