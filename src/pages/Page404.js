import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/6b/8b/b6/6b8bb65266ffdf64980122dd6704cf65.gif')`,
          backgroundSize: "300px auto",
          overflow: "hidden",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50  absolute"></div>
        {/* Actual Content */}
        <div className="text-white w-full h-full flex flex-col my-40 items-center relative z-10 text-center space-y-3">
          <h1 className="font-bold text-9xl">404</h1>
          <p className="font-bold text-2xl">Never gonna give you up,</p>
          <p>but it looks like this page just did.</p>
          <Link className="default-btn" to="/">
            Go back to home.
          </Link>
        </div>
      </div>
    </>
  );
}
