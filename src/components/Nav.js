import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../assets/imgs/cafely_logo.svg";
const Nav = () => {
  const { logout, currentUser } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <nav>
        <div className="flex justify-between items-center mx-10 py-8">
          <div className="flex space-x-10 items-center">
            <Link to="/">
              <img className="w-20" src={Logo} />
            </Link>
            <ul className="flex space-x-6">
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
          </div>
          <div>
            <ul className="flex space-x-6">
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
        </div>
      </nav>
    </div>
  );
};

export default Nav;
