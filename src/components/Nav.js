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
    <div className="sticky top-0 flex justify-between items-center py-8 px-10 bg-white w-full">
      <nav className="flex space-x-10 items-center">
        <Link to="/">
          <img className="w-20" src={Logo} />
        </Link>
        <ul className="flex space-x-6 text-gray-700">
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
      </nav>
      <div>
        <ul className="flex space-x-2">
          {!currentUser && (
            <React.Fragment>
              <li className="disabled:opacity-50 border-2 border-primary text-primary px-4 py-1 rounded hover:text-white transition hover:bg-primary">
                <Link to="/login"> Login </Link>
              </li>
              <li className="disabled:opacity-50 border bg-primary px-4 py-1 rounded text-white transition hover:bg-yellow-400">
                <Link to="/register"> Register </Link>
              </li>
            </React.Fragment>
          )}
          {currentUser && (
            <li>
              <Link onClick={handleLogout}> Logout </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
