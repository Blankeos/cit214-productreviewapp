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
    <nav className="flex justify-between  items-center sticky top-0 bg-white w-full py-8">
      <div className="flex space-x-10 items-center">
        <Link to="/">
          <img className="w-20 relative transform -translate-y-1" src={Logo} />
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
      </div>
      <div>
        <ul className="flex space-x-2">
          {!currentUser && (
            <React.Fragment>
              <li>
                <Link
                  className="disabled:opacity-50 border-2 border-primary text-primary px-4 py-2 rounded-full hover:text-white transition hover:bg-primary"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="font-poppins disabled:opacity-50 border-2 border-primary bg-primary px-4 py-2 rounded-full text-white transition hover:bg-yellow-400 hover:border-yellow-400"
                  to="/register"
                >
                  Register
                </Link>
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
    </nav>
  );
};

export default Nav;
