import React from "react";
import LoginForm from "../components/LoginForm";

// Goal is to have input fields for email + password
// buttons for login, register, login w/ google account

const Login = () => {
  return (
    <div className="mt-10 px-8">
      <LoginForm />
    </div>
  );
};

export default Login;
