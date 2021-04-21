import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export const showPopup = (props) => {
  return [];
};

const Popup = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="absolute rounded-lg bg-gray-800 px-5 py-5 m-12 bottom-0 right-0 flex justify-center items-center shadow-2xl">
      <p className="text-green-400 text-xs flex space-x-1">
        <FaRegCheckCircle size="1.1em" />
        <span>Successfully logged in as pokeboi@gmail.com</span>
      </p>
    </div>
  );
};

export default Popup;
