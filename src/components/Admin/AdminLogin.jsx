import React, { useState } from "react";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";
import { Link, useHistory } from "react-router-dom";

// Contexts & Hooks
import { useAdminAuth } from "../../contexts/AdminAuthContext";

// Components
import ErrorJSX from "../ErrorJSX";

// Services
import { toast } from "react-toastify";

// Icons
import { RiAdminFill } from "react-icons/ri";
import { MdError } from "react-icons/md";

const AdminLogin = () => {
  const { login } = useAdminAuth();

  const history = useHistory();
  const [input, setInput] = useState({
    username: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event, fieldName) => {
    setInput((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const authed = await login(input.username, input.password);
      if (authed) {
        toast.success(`🤵 Successfully logged in as admin`, {
          autoClose: 5000,
        });
        history.push("/admin/dashboard");
      }
    } catch (err) {
      toast.error(ErrorJSX(<MdError size="1.3em" />, "Failed to Login"), {
        autoClose: 5000,
      });
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <>
      {/* Page Container */}
      <div className="flex-grow text-gray-700 pb-14 pt-5 p-2 md:p-10 bg-gray-800 h-full">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col sm:flex-row max-w-6xl mx-auto sm:rounded-2xl shadow-md overflow-hidden rounded-b-2xl"
            style={{
              minHeight: "560px",
            }}
          >
            {/* Form */}
            <form className="flex flex-col bg-white sm:w-3/6 p-12 sm:border-t sm:border-l sm:border-b sm:rounded-tl-2xl sm:rounded-bl-2xl order-last sm:order-first">
              {/* Heading */}
              <h2 className="flex font-bold text-gray-600 space-x-2 text-2xl mb-16">
                <RiAdminFill className="relative transform translate-y-1 text-primary" />
                <span>Admin Login</span>
              </h2>
              {/* Fields */}
              <div className="flex flex-col space-y-3 w-full">
                <label>Admin Username</label>
                <input
                  className="border border-gray-300 rounded-sm p-2 inpfield-transition"
                  name="username"
                  type="username"
                  placeholder="Enter your username here"
                  onChange={(event) => handleChange(event, "username")}
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
                  onClick={(e) => handleSubmit(e)}
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
              </div>
            </form>
            {/* Image */}
            <div
              className="bg-yellow-300 w-full h-48 bg-center sm:h-auto bg-cover"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
