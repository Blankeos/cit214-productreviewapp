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
      <div className="flex-grow p-10">
        {/* Login Form Container */}
        <div
          className="flex max-w-6xl mx-auto rounded-2xl shadow-md overflow-hidden"
          style={{
            height: "560px",
          }}
        >
          {/* Form */}
          <form className="flex flex-col bg-white w-3/6 p-12 border-t border-l border-b rounded-tr-2xl rounded-br-2xl order-last">
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
            className="bg-yellow-300 w-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </>
    // <>
    //   {authStateChecked && (
    //     <div>
    //       <h1 className="text-4xl text-yellow-500 text-center font-extrabold">
    //         Register
    //       </h1>
    //       <p className="text-center p-4">
    //         {currentUser && "Currently logged in: " + currentUser.email}
    //       </p>
    //       <form className="relative w-96 mx-auto p-12 border border-gray-300 rounded-md h-auto bg-white">
    //         {error && (
    //           <p className="text-center p-4 text-red-600 bg-red-200 w-72 rounded-lg  justify-self mb-4 text-sm">
    //             {error}
    //           </p>
    //         )}
    //         <div className="flex flex-col space-y-3">
    //           <label>Email</label>
    //           <input
    //             className="border border-gray-300 rounded-sm p-2"
    //             name="email"
    //             type="email"
    //             placeholder="Enter your email here"
    //             onChange={(event) => handleChange(event, "email")}
    //           ></input>
    //           <label>Password</label>
    //           <input
    //             className="border border-gray-300 rounded-sm p-2"
    //             name="password"
    //             type="password"
    //             placeholder="Enter your password here"
    //             onChange={(event) => handleChange(event, "password")}
    //           ></input>
    //         </div>
    //         <p className="absolute text-right p-4 text-green-600 rounded-lg justify-content text-sm right-8 w-44">
    //           <p className="text-red-500">
    //             {passwordStrength.length < 6 &&
    //               passwordStrength.length > 0 &&
    //               "Bad password"}
    //           </p>
    //           <p className="text-yellow-500">
    //             {passwordStrength.length >= 6 &&
    //               passwordStrength.length < 10 &&
    //               "Good"}
    //           </p>
    //           {passwordStrength.length >= 10 && "Great"}
    //         </p>

    //         <button
    //           className="default-btn"
    //           type="submit"
    //           onClick={(e) => submit(e)}
    //           disabled={loading}
    //         >
    //           {loading ? <AnimatedLoadingIcon size="1.4em" /> : "Register"}
    //         </button>
    //       </form>
    //     </div>
    //   )}
    // </>
  );
};

export default RegisterForm;
