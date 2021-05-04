import React from "react";
import { useAuth } from "../contexts/AuthContext";
// How to use this component:
// props.dontRender = false (default)
// if Authed        : Render
// if Not Authed    : Dont Render

// props.dontRender = true
// if Authed        : Dont Render
// If Not Authed    : Render

export default function AuthRender(props) {
  const { currentUser } = useAuth();

  return <>{currentUser ? props.children : props.skeleton}</>;
}
