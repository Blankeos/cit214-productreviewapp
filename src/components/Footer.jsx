import React from "react";

// Context API & Hooks
import { Link } from "react-router-dom";

import { FaGithub, FaBook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-800 w-full text-primary flex flex-col space-y-5 items-center py-6">
      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        <FooterLink
          href="https://github.com/Blankeos/cit214-productreviewapp"
          icon={<FaGithub size="1.2em" />}
        >
          GitHub Source Code
        </FooterLink>
        <FooterLink
          href="https://cafely-manual.vercel.app/"
          icon={<FaBook size="1.2em" />}
        >
          User Manual
        </FooterLink>
      </div>
      <span className="text-sm">2021 © Cafe.ly • All Rights Reserved.</span>
    </div>
  );
}

function FooterLink({ href, icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center space-x-2 hover:text-yellow-400"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
