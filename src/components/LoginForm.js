import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

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
    setLoading(true);
    try {
      setError("");
      await login(state.email, state.password);
    } catch {
      setError("Can't log in");
    }
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
      <div>
        <h1 className="text-4xl text-primary text-center font-extrabold">
          Login
        </h1>
        <p className="text-center p-4">
          {currentUser && "Currently logged in: " + currentUser.email}
        </p>
        <form className="w-96 mx-auto p-12 border border-gray-300 rounded-md h-auto bg-white">
          {error && (
            <p className="text-center p-4 text-red-600 bg-red-200 w-72 rounded-lg  justify-self mb-4 text-sm">
              {error}
            </p>
          )}
          <div className="flex flex-col space-y-3">
            <label>Email</label>
            <input
              onChange
              className="border border-gray-300 rounded-sm p-2"
              name="email"
              type="email"
              placeholder="Enter your email here"
              onChange={(event) => handleChange(event, "email")}
            ></input>
            <label>Password</label>
            <input
              className="border  border-gray-300 rounded-sm p-2"
              name="password"
              type="password"
              placeholder="Enter your password here"
              onChange={(event) => handleChange(event, "password")}
            ></input>
          </div>
          <div className="flex space-x-3">
            <button
              className="default-btn"
              type="submit"
              onClick={(e) => submit(e)}
              disabled={loading}
            >
              Login
            </button>
            <Link
              to="/register"
              className="shadow-md disabled:opacity-50 border-2 border-primary text-primary px-4 py-2 rounded-full mt-4 hover:text-white transition hover:bg-primary"
            >
              Create an Account
            </Link>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-tr from-white via-yellow-100 to-primary">
        <h1 className="text-4xl text-center mt-5">Cafe.ly</h1>
      </div>
    </div>
  );
};

export default LoginForm;
