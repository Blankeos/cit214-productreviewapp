import React, { useState } from "react";

// ContextAPI
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

// Services
import { toast } from "react-toastify";

// Components
import { ErrorJSX } from "./ErrorJSX";

// Icons
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdError } from "react-icons/md";

//------------------

const RegisterForm = () => {
  // Hooks
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const { register, currentUser, authStateChecked } = useAuth();
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: 0,
  });

  // Functions
  const handleChange = (event, fieldName) => {
    if (fieldName === "password") {
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
      setLoading(true);
      await register(state.email, state.password, state.displayName);
      history.push("/");
      toast.success(`☕ ${state.email} is successfully registered!`, {
        autoClose: 5000,
      });
    } catch {
      toast.error(ErrorJSX(<MdError size="1.3em" />, "Failed to Register"), {
        autoClose: 5000,
      });
    }
    setLoading(false);
  };

  // Utility JSX
  const passwordStrengthIndicator = (
    <>
      <>
        {passwordStrength.length < 6 && passwordStrength.length > 0 && (
          <span className="text-xs text-white font-medium bg-red-400 py-0.5 px-3 rounded-full">
            Password is too short
          </span>
        )}
      </>
      <>
        {passwordStrength.length >= 6 && passwordStrength.length < 10 && (
          <span className="text-xs text-yellow-500 font-medium">
            Good Password
          </span>
        )}
      </>
      <>
        {passwordStrength.length >= 10 && (
          <span className="text-xs text-green-400 font-medium">
            Great Password
          </span>
        )}
      </>
    </>
  );

  return (
    <>
      {/* Page Container */}
      <div className="flex-grow pb-14 sm:p-10">
        {/* Login Form Container */}
        <div
          className="flex flex-col sm:flex-row max-w-6xl mx-auto sm:rounded-2xl shadow-md overflow-hidden rounded-b-2xl"
          style={{
            minHeight: "560px",
          }}
        >
          {/* Form */}
          <form className="flex flex-col bg-white sm:w-3/6 p-12 sm:border-t sm:border-l sm:border-b sm:rounded-tr-2xl sm:rounded-br-2xl order-last">
            {/* Heading */}
            <h2 className="flex font-bold text-gray-600 space-x-2 text-2xl mb-16">
              <GiCoffeeBeans className="relative transform translate-y-1 text-primary" />
              <span>Register</span>
            </h2>
            {/* Fields */}
            <div className="flex flex-col space-y-3 w-full">
              <label>Display Name</label>
              <input
                className="border border-gray-300 rounded-sm p-2 inpfield-transition"
                name="displayName"
                type="displayName"
                autoComplete="off"
                placeholder="What do we call you?"
                onChange={(event) => handleChange(event, "displayName")}
              ></input>
              <label>Email</label>
              <input
                className="border border-gray-300 rounded-sm p-2 inpfield-transition"
                name="email"
                type="email"
                placeholder="Enter your email here"
                onChange={(event) => handleChange(event, "email")}
              ></input>
              {/* Password Div For Strength Indicator */}
              <label className="flex justify-between items-center">
                <span>Password</span>
                <span className="text-xxs text-green-400 font-medium">
                  {passwordStrengthIndicator}
                </span>
              </label>
              <input
                className="w-full border border-gray-300 rounded-sm p-2 inpfield-transition"
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
                    <span>Registering...</span>
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
          {/* Image */}
          <div
            className="bg-yellow-300 w-full h-48 sm:h-auto"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
