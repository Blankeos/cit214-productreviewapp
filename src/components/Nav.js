import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../assets/imgs/cafely_logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { SiCoffeescript } from "react-icons/si";
import DropDown from "./DropDown.js";

import { toast } from "react-toastify";

import NavSearch from "./NavSearch";
import AuthRender from "./AuthRender";

const Nav = () => {
  const history = useHistory();
  const { logout, currentUser, authStateChecked } = useAuth();
  const [searchMode, setSearchMode] = useState(false);
  const [menuActive, setMenuActive] = useState({
    state: false,
    btnClass: "",
    menuClass: "-translate-y-full",
  });

  useEffect(() => {
    handleMenuButton();
  }, []);

  const handleMenuButton = () => {
    setMenuActive((prevState) => {
      return {
        ...prevState,
        state: !prevState.state,
      };
    });

    if (menuActive.state) {
      setMenuActive((prev) => ({
        ...prev,
        btnClass: "menu-btn-active",
        menuClass: "",
      }));
    } else {
      setMenuActive((prev) => ({
        ...prev,
        btnClass: "",
        menuClass: "-translate-y-full",
      }));
    }
  };

  const handleLogout = async () => {
    await logout();
    history.push("/login");
    toast.warn("👋 You have logged out. See you later!", { autoClose: 5000 });
  };

  return (
    <>
      {searchMode && (
        <NavSearch
          onClickOutside={() => {
            setSearchMode(false);
          }}
        />
      )}

      <nav className="sticky top-0 bg-white shadow-lg z-10">
        <div
          className="h-16 md:h-28 flex justify-between items-center w-full py-5 px-8 md:py-8 md:max-w-6xl mx-auto"
          style={{
            display: searchMode ? "none" : "flex",
          }}
        >
          <div className="flex md:space-x-4 items-center w-full mr-10">
            <Link to="/">
              <img
                className="w-16 h-16 md:w-20 md:h-20 relative transform -translate-y-1 transition duration-300 ease-out hover:scale-110 active:scale-90"
                src={Logo}
              />
            </Link>
            <div
              className={
                "bg-primary md:bg-transparent flex flex-col space-y-4 top-0 left-0 py-5 pt-20 absolute w-full items-center md:relative md:flex-row md:items-center md:mt-0 md:space-x-4 md:space-y-0 md:py-0 rounded-b-2xl transition-all transform motion-reduce:transition-transform md:-translate-y-0 " +
                menuActive.menuClass
              }
            >
              {/* Search Box */}
              <div className="text-sm flex bg-white transition-all ease-out py-2 px-2.5 md:w-48 rounded-full space-x-1 md:border md:border-gray-300 items-center w-10/12">
                <RiSearch2Line size="1.2em" color="gray" />
                <input
                  onFocus={() => {
                    setSearchMode(true);
                  }}
                  className="w-full p-1"
                  placeholder="Search..."
                ></input>
              </div>

              <div className="p-2 hidden md:flex lg:hidden ">
                <DropDown
                  menuClass="bg-transparent shadow-none transition transform active:scale-75 active:bg-gray-100 p-1"
                  label={
                    <BiDotsVerticalRounded
                      size="2em"
                      className="text-primary"
                    />
                  }
                  items={[
                    {
                      label: "Review",
                      route: "/review",
                    },
                    {
                      label: "Products",
                      route: "/products",
                    },
                    {
                      label: "About",
                      route: "/about",
                    },
                  ]}
                />
              </div>

              <div className="md:hidden flex space-x-4">
                {authStateChecked && !currentUser ? (
                  <>
                    <Link
                      onClick={handleMenuButton}
                      className="px-4 py-2 rounded-full border-gray-700 border-2 text-gray-700 hover:bg-gray-700 hover:text-primary"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={handleMenuButton}
                      className="px-4 py-2 rounded-full bg-gray-700 border-2 border-gray-700 text-primary hover:bg-gray-800 hover:border-gray-800"
                      to="/register"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <Link
                    onClick={() => {
                      handleLogout();
                      handleMenuButton();
                    }}
                  >
                    Logout
                  </Link>
                )}
              </div>

              <ul className="flex flex-col items-stretch text-center space-y-4 text-gray-700 md:flex-row md:space-x-6 md:space-y-0 md:hidden lg:flex py-3.5">
                <Link onClick={handleMenuButton} to="/review">
                  <li className="text-sm transform transition duration-75 ease-out hover:scale-105 active:scale-90">
                    Review
                  </li>
                </Link>
                <Link onClick={handleMenuButton} to="/products">
                  <li className="text-sm transform transition duration-75 ease-out hover:scale-105 active:scale-90">
                    Products
                  </li>
                </Link>
                <Link onClick={handleMenuButton} to="/about">
                  <li className="text-sm transform transition duration-75 ease-out hover:scale-105 active:scale-90">
                    About
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div
              onClick={handleMenuButton}
              className={
                "relative md:hidden w-5 h-5 flex flex-col cursor-pointer space-y-1 transition-all " +
                menuActive.btnClass
              }
            >
              <span className="bg-gray-800 w-full h-0.5 rounded-sm transform transition-transform duration-300"></span>
              <span className="bg-gray-800 w-full h-0.5 rounded-sm transition-all duration-200"></span>
              <span className="bg-gray-800 w-full h-0.5 rounded-sm  transform transition-transform duration-300"></span>
            </div>
            <ul className="hidden md:flex md:space-x-2">
              {authStateChecked && !currentUser && (
                <React.Fragment>
                  <li>
                    <Link
                      className="text-sm disabled:opacity-50 border-2 border-primary text-primary px-4 py-2 rounded-full hover:text-white transition hover:bg-primary"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm disabled:opacity-50 border-2 border-primary bg-primary px-4 py-2 rounded-full text-white transition hover:bg-yellow-400 hover:border-yellow-400"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                </React.Fragment>
              )}

              <AuthRender>
                {/* <div className="w-12 h-12 rounded-full bg-gray-100"></div> */}
                <DropDown
                  menuClass="bg-primary hover:bg-yellow-400 transition focus:ring-2 focus:ring-offset-2 focus:ring-primary transform active:scale-75"
                  label={<SiCoffeescript className="text-white" />}
                  items={[
                    {
                      icon: <BsFillPersonFill className="text-primary" />,
                      label: "Profile",
                      route: "/profile",
                    },
                    {
                      icon: <GoSignOut className="text-primary" />,
                      label: "Sign Out",
                      route: "/logout",
                      onClick: handleLogout,
                    },
                  ]}
                />
                {/* <li>
                    <Link onClick={handleLogout}> Logout </Link>
                  </li> */}
              </AuthRender>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
