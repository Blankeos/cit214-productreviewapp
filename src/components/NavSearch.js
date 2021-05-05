import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/cafely_logo.svg";
import { BsX } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";

const NavSearch = (props) => {
  const searchRef = useRef();
  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }

    props.onClickOutside();
  };

  return (
    <nav className="sticky top-0 bg-white shadow-lg z-10">
      <div className="h-16 md:h-28 flex justify-between items-center w-full py-5 px-8 md:py-8 md:max-w-6xl mx-auto">
        <div className="flex md:space-x-4 items-center w-full">
          <Link to="/">
            <img
              alt="Cafely Logo"
              className="w-16 h-16 md:w-20 md:h-20 relative transform -translate-y-1 transition duration-200 ease-out hover:scale-110 active:scale-90"
              src={Logo}
            />
          </Link>
          <div className="bg-primary md:bg-transparent flex flex-col space-y-4 top-0 left-0 py-5 pt-20 absolute w-full items-center md:relative md:flex-row md:items-center md:mt-0 md:space-x-4 md:space-y-0 md:py-0 md:pb-0 md:focus-within:pb-0 pb-40 focus-within:pb-10 rounded-b-2xl transition-all">
            {/* Search Box */}
            <div className="flex bg-white transition-all duration-300 ease-out focus-within:w-11/12 md:focus-within:w-full focus-within:shadow-lg py-2 px-2.5 md:w-48 rounded-full space-x-1 md:border md:border-gray-300 items-center w-10/12">
              <RiSearch2Line size="1.2em" color="gray" />
              <div ref={node} className="w-full flex space-x-1">
                <input
                  autoFocus
                  ref={searchRef}
                  className="w-full p-1 outline-none focus:ring-primary focus:ring-1 focus:rounded-sm"
                  placeholder="Search..."
                ></input>
                <button
                  className="px-1.5 focus:ring-primary focus:ring-1 rounded-full focus:outline-none transition transform active:scale-75"
                  onClick={() => {
                    searchRef.current.focus();
                    searchRef.current.value = "";
                  }}
                >
                  <BsX size="1.2em" color="gray" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSearch;
