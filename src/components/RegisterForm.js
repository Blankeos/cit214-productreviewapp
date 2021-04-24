import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

import { toast } from "react-toastify";
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";

const RegisterForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { register, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: 0,
  });

  const handleChange = (event, fieldName) => {
    if (fieldName == "password") {
      setPasswordStrength({
        length: event.target.value.length,
      });
    }

    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await register(state.email, state.password);
      toast.success(`☕ ${state.email} is successfully registered!`, {
        autoClose: 5000,
      });
    } catch {
      toast.error("⚠ Failed to register", { autoClose: 5000 });
      // setError("There's an error creating your account.");
      // if (passwordStrength.length < 6)
      //   toast.error("⚠ Password is less than 6 characters", {
      //     autoClose: 5000,
      //   });
      // if (state.email == "" || state.password == "") {
      //   toast.error("⚠ Fields can't be empty", { autoClose: 5000 });
      // }
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-4xl text-yellow-500 text-center font-extrabold">
        Register
      </h1>
      <p className="text-center p-4">
        {currentUser && "Currently logged in: " + currentUser.email}
      </p>
      <form className="relative w-96 mx-auto p-12 border border-gray-300 rounded-md h-auto bg-white">
        {error && (
          <p className="text-center p-4 text-red-600 bg-red-200 w-72 rounded-lg  justify-self mb-4 text-sm">
            {error}
          </p>
        )}
        <div className="flex flex-col space-y-3">
          <label>Email</label>
          <input
            className="border border-gray-300 rounded-sm p-2"
            name="email"
            type="email"
            placeholder="Enter your email here"
            onChange={(event) => handleChange(event, "email")}
          ></input>
          <label>Password</label>
          <input
            className="border border-gray-300 rounded-sm p-2"
            name="password"
            type="password"
            placeholder="Enter your password here"
            onChange={(event) => handleChange(event, "password")}
          ></input>
        </div>
        <p className="absolute text-right p-4 text-green-600 rounded-lg justify-content text-sm right-8 w-44">
          <p className="text-red-500">
            {passwordStrength.length < 6 &&
              passwordStrength.length > 0 &&
              "Bad password"}
          </p>
          <p className="text-yellow-500">
            {passwordStrength.length >= 6 &&
              passwordStrength.length < 10 &&
              "Good"}
          </p>
          {passwordStrength.length >= 10 && "Great"}
        </p>

        <button
          className="default-btn"
          type="submit"
          onClick={(e) => submit(e)}
          disabled={loading}
        >
          {loading ? <AnimatedLoadingIcon size="1.4em" /> : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
