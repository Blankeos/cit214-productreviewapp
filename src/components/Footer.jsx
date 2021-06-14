import React from "react";

// Context API & Hooks
import { Link } from "react-router-dom";

import { FaGithub, FaBook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-800 w-full text-primary flex flex-col space-y-5 items-center py-6">
      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        <a
          href="https://github.com/Blankeos/cit214-productreviewapp"
          target="_blank"
          className="flex items-center space-x-2"
        >
          <FaGithub size="1.2em" />
          <span>GitHub Source Code</span>
        </a>
        <a
          href="https://github.com/Blankeos/cit214-productreviewapp"
          target="_blank"
          className="flex items-center space-x-2"
        >
          <FaBook size="1.2em" />
          <span>User Manual</span>
        </a>
      </div>
      <span>2021 © Cafe.ly • All Rights Reserved.</span>
    </div>
  );
}
