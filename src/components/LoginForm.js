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

  const submit = async () => {
    await axios
      .post("http://localhost:3000/api/login", state)
      .then((res) => {
        alert(res.status);
      })
      .catch((err) => {
        alert(err.status);
      });
  };

  return (
    <div className="mt-36">
      <h1 className="text-4xl text-blue-500 text-center">Login</h1>
      <div className="w-96 m-8 mx-auto p-12 border h-auto">
        <div className="flex flex-col space-y-3">
          <label>Email</label>
          <input
            onChange
            className="border border-black rounded-sm p-2"
            name="email"
            type="email"
            placeholder="Enter your email here"
            onChange={(event) => handleChange(event, "email")}
          ></input>
          <label>Password</label>
          <input
            className="border border-black rounded-sm p-2"
            name="password"
            type="password"
            placeholder="Enter your password here"
            onChange={(event) => handleChange(event, "password")}
          ></input>
        </div>
        <button
          className="border shadow-md bg-yellow-500 px-5 py-2 rounded-full mt-4 text-white"
          onClick={submit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
