import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (event, fieldName) => {
    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(state.email, state.password);
    } catch {
      setError("Can't log in");
    }
  };

  return (
    <div className="mt-36">
      <h1 className="text-4xl text-blue-500 text-center">Login</h1>
      <p className="text-center p-4">
        {currentUser && "Currently logged in: " + currentUser.email}
      </p>
      <form className="w-96 mx-auto p-12 border h-auto">
        {error && (
          <p className="text-center p-4 text-red-600 bg-red-200 w-72 rounded-lg  justify-self mb-4 text-sm">
            {error}
          </p>
        )}
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
          className="shadow-md disabled:opacity-50 border bg-yellow-500 px-5 py-2 rounded-full mt-4 text-white transition hover:bg-yellow-400"
          type="submit"
          onClick={(e) => submit(e)}
          disabled={loading}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
