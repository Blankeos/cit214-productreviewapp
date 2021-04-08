import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/login"> Login </Link>
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
    </div>
  );
};

export default Nav;
