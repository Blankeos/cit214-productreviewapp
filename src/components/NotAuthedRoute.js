import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export default function NotAuthedRoute(props) {
  const { currentUser } = useAuth();

  return (
    <>
      <Route>
        {currentUser ? (
          <Redirect to="/profile">
            {/* {currentUser &&
              toast.success(`😳 You're already logged in`, {
                autoClose: 5000,
              })} */}
          </Redirect>
        ) : (
          props.children
        )}
      </Route>
    </>
  );
}
