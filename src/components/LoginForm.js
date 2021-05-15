import React, { useState } from "react";

// Context API
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

// Services
import { toast } from "react-toastify";

// Components
import { ErrorJSX } from "./ErrorJSX";

// Icons
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdError } from "react-icons/md";

//------------------

const LoginForm = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { login, authStateChecked } = useAuth();
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
      await login(state.email, state.password);
      history.push("/");
      toast.success(`😃 Successfully logged in as ${state.email}`, {
        autoClose: 5000,
      });
    } catch {
      toast.error(ErrorJSX(<MdError size="1.3em" />, "Failed to Login"), {
        autoClose: 5000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      {/* Page Container */}
      <div className="flex-grow p-10">
        {/* Login Form Container */}
        <div
          className="flex max-w-6xl mx-auto rounded-2xl shadow-md overflow-hidden"
          style={{
            height: "560px",
          }}
        >
          {/* Form */}
          <form className="flex flex-col bg-white w-3/6 p-12 border-t border-l border-b rounded-tl-2xl rounded-bl-2xl">
            {/* Heading */}
            <h2 className="flex font-bold text-gray-600 space-x-2 text-2xl mb-16">
              <GiCoffeeBeans className="relative transform translate-y-1 text-primary" />
              <span>Login</span>
            </h2>
            {/* Fields */}
            <div className="flex flex-col space-y-3 w-full">
              <label>Email</label>
              <input
                className="border border-gray-300 rounded-sm p-2 inpfield-transition"
                name="email"
                type="email"
                placeholder="Enter your email here"
                onChange={(event) => handleChange(event, "email")}
              ></input>
              <label>Password</label>
              <input
                className="border  border-gray-300 rounded-sm p-2 inpfield-transition"
                name="password"
                type="password"
                placeholder="Enter your password here"
                onChange={(event) => handleChange(event, "password")}
              ></input>
            </div>
            {/* Buttons */}
            <div className="flex flex-col h-full justify-between">
              <button
                className="default-btn"
                type="submit"
                onClick={(e) => submit(e)}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex space-x-2 justify-center">
                    <span>
                      <AnimatedLoadingIcon size="1.4em" />
                    </span>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
              <div className="flex flex-col text-xxs space-y-1 text-gray-400 font-semibold">
                <Link to="/register">CREATE ACCOUNT</Link>
                <Link to="/register">CAN'T SIGN IN?</Link>
              </div>
            </div>
          </form>
          {/* Image */}
          <div className="bg-yellow-300 w-full bg-login-img"></div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
