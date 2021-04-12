import React from "react";
import LoginForm from "../components/LoginForm";

// Goal is to have input fields for email + password
// buttons for login, register, login w/ google account

const Login = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue-500">Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
