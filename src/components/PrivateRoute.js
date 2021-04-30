import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export default function PrivateRoute(props) {
  const { currentUser } = useAuth();
  const history = useHistory();
  return (
    <div>
      <Route>
        {
          currentUser ? (
            props.children
          ) : (
            <>
              {history.push("/login")}
              {toast.success(`😳 You're not authorized`, {
                autoClose: 5000,
              })}
            </>
          )
          // <Redirect to="/login">
          //   {toast.success(`😳 You're not authorized`, {
          //     autoClose: 5000,
          //   })}
          // </Redirect>
        }
      </Route>
    </div>
  );
}
