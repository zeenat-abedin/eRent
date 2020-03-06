import React, { useState } from "react";
import { useAlert } from 'react-alert'


import Input from "../shared/Input";
import {
  auth,
  createUserProfileDocument,
  getUserDetails
} from "../../firebase/util";
import axios from "../../config/axios";

const Register = () => {
  const alert = useAlert()
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, phone, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert.show("ConfirmPassword and password should be same")
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      let createdUser = await createUserProfileDocument(user, {
        displayName,
        phone
      });

      const data = await createdUser.get();
      console.log(data);

      //  TODO-  get userDetails from firestore and save into postgres database
      const userDetails = await getUserDetails(user);

      const response = await axios.post("/auth", {
        displayName,
        email,
        phone,
        userId: user.uid
      });

      // alert(response.data.message);
      alert.show(response.data.message)

      setUser({
        displayName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      alert.show(error.message)
    }
  };
  const { displayName, email, phone, password, confirmPassword } = user;
  return (
    <form onSubmit={handleSubmit} id="register" className="custom-input-group">
      <Input
        type="text"
        name="displayName"
        placeholder="Full Name"
        classNam="input-field"
        style={{ margin: "5px 0" }}
        onChange={handleChange}
        value={displayName}
        required
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Mobile Number"
        classNam="input-field"
        pattern="[789][0-9]{9}"
        style={{ margin: "5px 0" }}
        onChange={handleChange}
        value={phone}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        classNam="input-field"
        style={{ margin: "5px 0" }}
        onChange={handleChange}
        value={email}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        classNam="input-field"
        style={{ marghekin: "5px 0" }}
        onChange={handleChange}
        value={password}
        required
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        classNam="input-field"
        style={{ margin: "5px 0" }}
        onChange={handleChange}
        value={confirmPassword}
        required
      />
      <input
        type="checkbox"
        name="terms"
        id="terms"
        className="check-box d-none"
      />
      <label htmlFor="terms" className="pt-2 text-white">
        {check ? (
          <i className="fas fa-check-square fa-1x text-white"></i>
        ) : (
            <i className="far fa-check-square fa-1x text-white"></i>
          )}

        <span className="rm-pass ml-2 text-white" onClick={() => setCheck(!check)}>
          I agree to the terms and condition
        </span>
      </label>
      <input
        type="submit"
        value="Register"
        className="submit-button"
        style={{ marginTop: "10px" }}
      />
    </form>
  );
};

export default Register;
