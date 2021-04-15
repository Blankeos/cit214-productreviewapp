import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
  const { logout, currentUser } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <nav className="flex">
        <div className="flex justify-between mx-10">
          <ul className="flex space-x-4">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/review"> Review </Link>
            </li>
            <li>
              <Link to="/products"> Products </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login"> Login </Link>
            </li>
            <li>
              <Link to="/register"> Register </Link>
            </li>
            {currentUser && (
              <li>
                <Link onClick={handleLogout}> Logout </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
