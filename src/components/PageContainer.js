import React from "react";

export default function PageContainer({ className: ClassName = "", ...rest }) {
  return (
    <div
      className={`text-gray-800 bg-white w-full flex-grow h-full px-2 sm:px-8 pt-12 pb-24 ${ClassName}`}
    >
      {rest.children}
    </div>
  );
}
