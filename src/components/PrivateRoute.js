import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const customId = "custom-id-yes";

export const PrivateRoute = ({
  component: Component,
  customToast = `😳 You're  not authorized`,
  toastDuration = 1200,
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
            {toast.error(customToast, {
              autoClose: toastDuration,
              toastId: customId,
            })}
          </Redirect>
        ))
      }
    />
  );
};

export default PrivateRoute;
