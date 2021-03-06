import React, { useState, useEffect } from "react";

// ContextAPI & Hooks
import { useAuth } from "../contexts/AuthContext";

// Components
import DialogInput from "../components/AccountSettings/DialogInput";

// Services
import { getProfile, updateProfile } from "../services/restServices";
import { toast } from "react-toastify";

// Icons
import { FaUserCog } from "react-icons/fa";
import { AiOutlineLink, AiOutlineCloudUpload } from "react-icons/ai";
import DefaultPhoto from "../components/ProductPage/DefaultPhoto";
import AnimatedLoadingIcon from "../components/AnimatedLoadingIcon";

// TippyJS
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/animations/scale.css";

const AccountSettings = () => {
  // Data
  const { createToken, currentUser } = useAuth();

  // States
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Modal Sates
  const [isOpen, setIsOpen] = useState(false);

  // Form States
  const [photoURL, setPhotoURL] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [bio, setBio] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const result = await getProfile(currentUser.uid);
    setProfile(result);

    // Set form states
    setDisplayName(result.displayName);
    setBio(result.bio);
    setPhotoURL(result.photoURL);

    console.log(result);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await updateProfile(
        createToken,
        displayName,
        bio,
        photoURL
      );
      toast.success(
        `🤠 Successfully updated your profile. Refreshing to show changes...`,
        {
          autoClose: 5000,
        }
      );

      setTimeout(() => {
        window.location.reload();
      }, 1000);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = fetchData();
    return unsubscribe;
  }, []);

  return (
    <>
      {/* Page Container */}
      <div className="flex-grow text-gray-700 pb-14 pt-5 p-2 md:p-10">
        <DialogInput
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onSave={(value) => setPhotoURL(value)}
        />
        <div className="max-w-6xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3 shadow-xl rounded-2xl border-t border-l border-r p-8 md:p-12 overflow-hidden"
          >
            <h1 className="pb-5 font-extrabold text-2xl flex space-x-4 items-center">
              <FaUserCog size="1.5em" className="text-primary" />
              <span>Account Settings</span>
            </h1>
            {/* Profile Picture Section */}
            <h2 className="text-xl">Profile Picture</h2>
            {/* Profile Picture and 2 Buttons Container */}
            <div className="pb-4 flex flex-col items-center md:flex-row md:space-x-4">
              {/* Profile Picture */}
              <div className="h-32 w-32 md:h-40 md:w-40 relative flex-shrink-0 overflow-hidden rounded-full">
                {photoURL && (
                  <img
                    src={photoURL && photoURL}
                    className="absolute object-cover object-center w-full h-full"
                    onError={() => {
                      setPhotoURL(null);
                      toast.error(`😥 Photo given is invalid`, {
                        autoClose: 5000,
                      });
                    }}
                  ></img>
                )}
                {profile && !photoURL && <DefaultPhoto size="3.5em" />}
              </div>
              {/* 2 Buttons Container */}
              <div className="flex flex-row space-x-1 mt-5 md:mt-0 md:flex-col md:space-y-5 md:space-x-0 text-center md:text-left">
                <div>
                  <input
                    type="file"
                    id="photoUpload"
                    accept="image/*"
                    className="hidden"
                    disabled={true}
                  ></input>
                  <Tippy
                    animation="scale"
                    inertia={true}
                    content={
                      <span>
                        😓 <b>Darn, Sorry!</b>
                        <br />
                        This feature is
                        <br />
                        disabled for now.
                        <br />
                        Try using link instead.
                      </span>
                    }
                    placement="left"
                  >
                    <label
                      for="photoUpload"
                      className={`text-white p-3 text-sm bg-primary border border-primary rounded-md disabled:opacity-50 cursor-pointer select-none flex flex-col md:flex-row items-center md:space-x-1 justify-center ${
                        true && "opacity-50"
                      }`}
                    >
                      <AiOutlineCloudUpload className="hidden md:block" />
                      <AiOutlineCloudUpload
                        className="block md:hidden"
                        size="1.5em"
                      />
                      <span>Upload own Photo</span>
                    </label>
                  </Tippy>
                </div>

                <button
                  type="button"
                  disabled={loading}
                  className="text-primary p-3 text-sm border border-primary rounded-md disabled:opacity-50 focus:outline-none transition hover:bg-primary hover:text-white transform active:scale-90 ease-in-out select-none flex flex-col md:flex-row items-center md:space-x-1 justify-center"
                  onClick={() => setIsOpen(true)}
                >
                  <AiOutlineLink className="hidden md:block" />
                  <AiOutlineLink className="block md:hidden" size="1.5em" />
                  <span>Upload using Link</span>
                </button>
              </div>
            </div>
            {/* Display Name */}
            <h2 className="text-xl">Display Name</h2>
            <input
              className="text-sm text-gray-500 max-w-sm border border-gray-300 rounded-sm p-2 inpfield-transition"
              placeholder={loading && "Fetching data..."}
              defaultValue={displayName && displayName}
              disabled={loading}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <h2 className="text-xl">Bio</h2>
            <textarea
              className="text-sm text-gray-500 max-w-sm border border-gray-300 rounded-sm p-2 inpfield-transition"
              placeholder={loading && "Fetching data..."}
              defaultValue={bio && bio}
              style={{
                minHeight: "7rem",
                maxHeight: "10rem",
              }}
              disabled={loading}
              onChange={(e) => setBio(e.target.value)}
            />
            <div>
              <button className="default-btn" disabled={loading} type="submit">
                {loading ? (
                  <div className="flex space-x-2 justify-center">
                    <span>
                      <AnimatedLoadingIcon size="1.4em" />
                    </span>
                    <span>
                      {loading && profile ? "Updating..." : "Please wait..."}
                    </span>
                  </div>
                ) : (
                  <span>Update my profile</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
