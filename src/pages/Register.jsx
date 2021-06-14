import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Cafe.ly | Register</title>
        <meta name="title" content="Cafe.ly | Register" />
        <meta name="description" content="Create a new account on Cafe.ly" />
      </Helmet>

      <RegisterForm />
    </>
  );
};

export default Register;
