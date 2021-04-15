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
    } catch {
      setError("There's an error creating your account.");
      if (passwordStrength.length < 6)
        setError("Password is less than 6 chars.");
      if (state.email == "" || state.password == "") {
        setError("Fields can't be empty.");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-4xl text-yellow-500 text-center">Register</h1>
      <p className="text-center p-4">
        {currentUser && "Currently logged in: " + currentUser.email}
      </p>
      <form className="relative w-96 mx-auto p-12 border border-gray-300 rounded-md h-auto">
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
          className="shadow-md disabled:opacity-50 border bg-yellow-500 px-5 py-2 rounded-full mt-4 text-white transition hover:bg-yellow-400"
          type="submit"
          onClick={(e) => submit(e)}
          disabled={loading}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
