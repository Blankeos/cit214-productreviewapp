import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../assets/imgs/cafely_logo.svg";
import { RiSearch2Line } from "react-icons/ri";
const Nav = () => {
  const { logout, currentUser } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="bg-purple-100">
      <div className="flex justify-between items-center sticky top-0 w-full py-5 px-8 md:py-8 md:max-w-6xl mx-auto">
        <div className="flex md:space-x-4 items-center">
          <Link to="/">
            <img
              className="w-20 relative transform -translate-y-1"
              src={Logo}
            />
          </Link>
          <div className="bg-primary md:bg-transparent flex flex-col space-y-4 top-0 left-0 py-5 absolute w-full items-center md:static md:flex-row md:items-center md:mt-0 md:space-x-4 md:space-y-0 md:py-0">
            <div className="flex bg-white shadow-sm py-2 px-2.5 md:w-48 rounded-full space-x-1 items-center w-10/12">
              <RiSearch2Line size="1.2em" color="gray" />
              <input className="w-full p-1" placeholder="Search..."></input>
            </div>
            <ul className="flex flex-col items-stretch text-center space-y-4 text-gray-700 md:flex-row md:space-x-6 md:space-y-0 md:hidden lg:flex">
              <li>
                <Link to="/review">Review</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="w-8 h-8 flex flex-col justify-evenly cursor-pointer">
            <span className="bg-gray-700 w-full h-0.5"></span>
            <span className="bg-gray-700 w-full h-0.5"></span>
            <span className="bg-gray-700 w-full h-0.5"></span>
          </div>
          {/* <ul className="flex space-x-2">
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
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
