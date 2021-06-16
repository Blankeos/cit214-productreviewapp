import React from "react";

const NavLi = ({ locationIsMatch, icon, children }) => {
  return (
    <li
      className={`text-sm transform transition-all duration-150 ease-in-out hover:scale-105 active:scale-90 md:hover:text-primary ${
        locationIsMatch("about") ? "md:text-primary" : ""
      }`}
    >
      <span className="flex space-x-1 items-center">
        <i className="md:hidden">{icon}</i> <span>{children}</span>
      </span>
    </li>
  );
};

export default NavLi;
