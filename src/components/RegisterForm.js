import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const RegisterForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { register, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event, fieldName) => {
    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const submit = async () => {
    try {
      setError("");
      setLoading(true);
      await register(state.email, state.password);
    } catch {}
    setLoading(false);
    // .post("http://localhost:3000/api/register", state)
    // .then((res) => {
    //   alert(res.status);
    // })
    // .catch((err) => {
    //   alert(err.status);
    // });
  };

  return (
    <div className="mt-36">
      <h1 className="text-4xl text-blue-500 text-center">Register</h1>
      <p className="text-center p-4">
        {currentUser && "Currently logged in: " + currentUser.email}
      </p>
      {error && { error }}
      <div className="w-96 m-8 mx-auto p-12 border h-auto">
        <div className="flex flex-col space-y-3">
          <label>Email</label>
          <input
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
          className="shadow-md disabled:opacity-50 border bg-yellow-500 px-5 py-2 rounded-full mt-4 text-white"
          onClick={submit}
          disabled={loading}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
