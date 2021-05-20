import React from "react";

// Context API & Hooks
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-darkGray w-full text-white flex flex-col space-y-5 items-center py-6">
      <a
        href="https://github.com/Blankeos/cit214-productreviewapp"
        target="_blank"
        className="flex items-center space-x-2"
      >
        <FaGithub size="1.2em" />
        <span>GitHub Source Code</span>
      </a>
      <span>2021 © Cafe.ly • All Rights Reserved.</span>
    </div>
  );
}
