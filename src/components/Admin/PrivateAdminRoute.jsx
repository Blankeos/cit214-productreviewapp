import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAdminAuth } from "../../contexts/AdminAuthContext";
import { toast } from "react-toastify";

const customId = "custom-id-yes";

export const PrivateAdminRoute = ({
  component: Component,
  customToast = `😳 You're not an admin.`,
  toastDuration = 1200,
  redirectTo = "/admin",
  ...rest
}) => {
  const { isAuthorized } = useAdminAuth();

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo}>
            {toast.error(customToast, {
              autoClose: toastDuration,
              toastId: customId,
            })}
          </Redirect>
        )
      }
    />
  );
};

export default PrivateAdminRoute;
