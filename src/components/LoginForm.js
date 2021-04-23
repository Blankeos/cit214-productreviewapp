import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { GiCoffeeBeans } from "react-icons/gi";
import Popup from "./Popup";

import { toast } from "react-toastify";

const LoginForm = () => {
  const history = useHistory();
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
      history.push("/");
      toast.success(`😃 Successfully logged in as ${state.email}`, {
        autoClose: 5000,
      });
    } catch {
      toast.error("⚠ Failed to login", { autoClose: 5000 });
      setError("Can't log in");
    }
    setLoading(false);
  };

  //   <p className="text-center p-4">
  //   {currentUser && "Currently logged in: " + currentUser.email}
  // </p>

  return (
    <div class="mt-20 p-2 md:max-w-6xl md:p-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-96 border border-gray-300 rounded-2xl shadow-xl overflow-hidden">
        <form className="w-full p-12 col-span-1 flex flex-col justify-center flex-shrink-0">
          <h2 className="flex font-bold text-gray-600 space-x-2 text-2xl mb-5">
            <GiCoffeeBeans className="relative transform translate-y-1 text-primary" />
            <span>Login</span>
          </h2>
          <div className="flex flex-col space-y-3 w-full">
            <label>Email</label>
            <input
              onChange
              className="border border-gray-300 rounded-sm p-2 outline-none focus:ring-1 focus:ring-primary"
              name="email"
              type="email"
              placeholder="Enter your email here"
              onChange={(event) => handleChange(event, "email")}
            ></input>
            <label>Password</label>
            <input
              className="border  border-gray-300 rounded-sm p-2 outline-none focus:ring-1 focus:ring-primary"
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
              className="shadow-md disabled:opacity-50 border-2 border-primary text-primary px-4 py-2 rounded-full mt-4 hover:text-white transition hover:bg-primary flex-shrink-0"
            >
              Create an Account
            </Link>
          </div>
        </form>
        <div className="h-40 md:h-full md:w-full bg-login-img bg-cover bg-center col-span-1 order-first md:order-last flex-shrink">
          <h1 className="text-4xl text-center"></h1>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
