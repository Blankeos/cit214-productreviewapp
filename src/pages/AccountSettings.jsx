import React, { useState, useEffect } from "react";

// ContextAPI & Hooks
import { useAuth } from "../contexts/AuthContext";

// Services
import { getProfile } from "../services/restServices";

// Icons
import { FaUserCog } from "react-icons/fa";
import DefaultPhoto from "../components/ProductPage/DefaultPhoto";

const AccountSettings = () => {
  // Data
  const [profile, setProfile] = useState(null);
  const { createToken } = useAuth();
  const fetchData = async () => {
    const result = await getProfile(createToken);
    setProfile(result);
    console.log(result);
  };
  useEffect(() => {
    const unsubscribe = fetchData();
    return unsubscribe;
  }, []);
  return (
    <>
      {/* Page Container */}
      <div className="flex-grow text-gray-700 pb-14 p-10">
        <div className="max-w-6xl mx-auto">
          {/* Form */}
          <form className="flex flex-col space-y-3 shadow-xl rounded-2xl border-t border-l border-r p-12 overflow-hidden">
            <h1 className="pb-5 font-extrabold text-2xl flex space-x-4 items-center">
              <FaUserCog size="1.5em" className="text-primary" />
              <span>Account Settings</span>
            </h1>
            {/* Profile Picture */}
            <h2 className="text-xl">Profile Picture</h2>
            <div className="py-4 flex space-x-4">
              <div
                className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-full"
                style={{
                  backgroundImage: `url('${
                    profile && profile.photoURL && profile.photoURL
                  }')`,
                }}
              >
                {profile && !profile.photoURL && <DefaultPhoto size="3.5em" />}
              </div>
              <div className="flex space-y-5 flex-col justify-center">
                <button className="text-white px-5 p-3 bg-primary border border-primary rounded-md">
                  Upload a New Photo
                </button>
                <button className="text-primary p-3 border border-primary rounded-md">
                  Use a Link
                </button>
              </div>
            </div>
            {/* Display Name */}
            <h2 className="text-xl">Display Name</h2>
            <input
              className="max-w-sm border border-gray-300 rounded-sm p-2 inpfield-transition"
              placeholder=""
              defaultValue={profile && profile.displayName}
            />
            <h2 className="text-xl">Bio</h2>
            <textarea
              className="max-w-sm border border-gray-300 rounded-sm p-2 inpfield-transition"
              placeholder=""
              defaultValue={profile && profile.bio && profile.bio}
              style={{
                minHeight: "7rem",
                maxHeight: "10rem",
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
