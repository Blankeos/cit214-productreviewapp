import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/cafely_logo.svg";

import { motion } from "framer-motion";

// Components
import SearchListBox from "./NavBar/SearchListBox";

const NavSearch = (props) => {
  const searchBoxNode = useRef();
  const listBoxNode = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (
      searchBoxNode.current.contains(e.target) ||
      (listBoxNode.current ? listBoxNode.current.contains(e.target) : false)
    ) {
      // inside click
      return;
    }

    props.onClickOutside();
  };

  return (
    <nav className="sticky top-0 bg-white shadow-lg z-20">
      <div className="h-16 md:h-28 flex justify-between items-center w-full py-5 px-8 md:py-8 md:max-w-6xl mx-auto">
        <div className="flex md:space-x-4 items-center w-full">
          <Link onClick={() => props.onClickOutside()} to="/">
            <motion.img
              initial={{ scale: 0.8, y: -3.6 }}
              animate={{ scale: 1 }}
              alt="Cafely Logo"
              className="w-16 h-16 md:w-20 md:h-20 relative transform -translate-y-1 transition duration-200 ease-out hover:scale-110 active:scale-90"
              src={Logo}
            />
          </Link>
          <SearchListBox
            searchBoxNode={searchBoxNode}
            listBoxNode={listBoxNode}
            closeSearchMode={props.onClickOutside}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavSearch;
