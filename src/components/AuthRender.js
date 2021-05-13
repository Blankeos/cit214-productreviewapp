import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function AuthRender(props) {
  const { currentUser } = useAuth();

  return <>{currentUser ? props.children : props.skeleton}</>;
}
