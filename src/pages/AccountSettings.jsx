import React from "react";

// Icons
import { FaUserCog } from "react-icons/fa";

const AccountSettings = () => {
  return (
    <>
      {/* Page Container */}
      <div className="flex-grow text-gray-700 pb-14 p-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-extrabold text-3xl flex space-x-4 items-center">
            <FaUserCog size="1.5em" className="text-primary" />
            <span>Account Settings</span>
          </h1>

          {/* Form */}
          <form className="mt-10 flex flex-col space-y-3">
            <h2 className="text-xl">Profile Picture</h2>
            <h2 className="text-xl">Display Name</h2>
            <input
              className="border border-gray-300 rounded-sm p-2 inpfield-transition"
              placeholder=""
            />
            <h2 className="text-xl">Bio</h2>
            <textarea
              className="border border-gray-300 rounded-sm p-2 inpfield-transition"
              placeholder=""
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
