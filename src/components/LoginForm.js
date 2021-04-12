import React, { useEffect, useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, fieldName) => {
    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
  };

  const submit = () => {
    axios.post("http://localhost:3000/api/login", state);
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <label>Email</label>
        <input
          onChange
          className="border border-black"
          name="email"
          type="email"
          placeholder="Enter your email here"
          onChange={(event) => handleChange(event, "email")}
        ></input>
        <label>Password</label>
        <input
          className="border border-black"
          name="password"
          type="password"
          placeholder="Enter your password here"
          onChange={(event) => handleChange(event, "password")}
        ></input>
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default LoginForm;
