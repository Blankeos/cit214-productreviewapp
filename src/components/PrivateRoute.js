import React, { Component, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const customId = "custom-id-yes";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
  ...rest
}) => {
  const { currentUser, authStateChecked } = useAuth();
  return (
    <Route
      {...rest}
      component={(props) =>
        authStateChecked &&
        (currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo}>
            {toast.error(`😳 You're not authorized`, {
              autoClose: 1200,
              toastId: customId,
            })}
          </Redirect>
        ))
      }
    />
  );
};

export default PrivateRoute;
