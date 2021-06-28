import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Context API
import { useAuth } from "../contexts/AuthContext";
import { useParams, Link } from "react-router-dom";

// Services
import { getProfile } from "../services/restServices";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

// Components
import ActivityCard, { ActivityCardSkeleton } from "../components/ActivityCard";

// Icons
import { FiEdit } from "react-icons/fi";
import { RiFileCopy2Line } from "react-icons/ri";
import DefaultPhoto from "../components/ProductPage/DefaultPhoto";

//------------------

const Profile = () => {
  const { currentUser } = useAuth();
  const { uidSlug } = useParams();
  const [profile, setProfile] = useState(null);

  async function fetchData() {
    setProfile(null);
    const result = await getProfile(uidSlug ? uidSlug : currentUser.uid);
    console.log(result);
    setProfile(result);
  }

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, [uidSlug]);

  return (
    <>
      <Helmet>
        <title>{`Cafe.ly | ${
          profile ? `${profile.displayName}'s` : " "
        } Profile`}</title>
        <meta
          name="title"
          content={`Cafe.ly | ${
            profile ? `${profile.displayName}'s` : " "
          } Profile`}
        />
        <meta
          name="description"
          content={profile ? profile.bio : "A Cafe.ly Profile"}
        />
      </Helmet>

      <div className="relative flex flex-col text-gray-800 w-full flex-grow h-full">
        {/* Cover Photo */}
        <div className="absolute top-0 h-32 w-full">
          <div
            className="bg-gray-200 h-full w-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=956&q=80')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              zIndex: "0",
            }}
          ></div>
        </div>
        {/* Body */}
        <div className="relative px-2 sm:px-8 pt-12 pb-24">
          {profile ? (
            <ProfileHeader profileData={profile} uidSlug={uidSlug} />
          ) : (
            <ProfileHeaderSkeleton />
          )}
          {/* Container // it's supposed to be white yes... */}
          <div className="max-w-6xl mx-auto relative">
            {/* Activity Section */}
            <div className="flex flex-col max-w-xl mx-auto items-center gap-3 rounded">
              <h1 className="font-bold text-4xl my-20 mb-14">Activity</h1>
              <div className="flex flex-col w-full gap-3">
                {profile ? (
                  profile.userRatings.map((userRating) => (
                    <ActivityCard
                      key={userRating._id}
                      reviewData={userRating}
                    />
                  ))
                ) : (
                  <>
                    <ActivityCardSkeleton />
                    <ActivityCardSkeleton />
                    <ActivityCardSkeleton />
                    <ActivityCardSkeleton />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileHeader = ({ profileData, uidSlug, ...rest }) => {
  return (
    <>
      {/* Profile Header Section */}
      <div className="flex flex-wrap w-full flex-col items-center px-4 space-y-5 mx-auto overflow-hidden text-center">
        {/* Profile Photo */}
        <div className="border-8 border-white rounded-full">
          <div className="flex relative overflow-hidden items-center justify-center h-36 w-36 rounded-full bg-white shadow">
            {profileData && profileData.photoURL ? (
              <div
                className="absolute w-full h-full"
                style={{
                  backgroundImage: `url('${profileData.photoURL}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            ) : (
              <DefaultPhoto size="3.3em" />
            )}
          </div>
        </div>

        <h1 className="font-bold text-xl">
          {profileData && profileData.displayName
            ? profileData.displayName
            : `Barrack Obama`}
        </h1>

        {/* Edit & Share Profile Button */}
        {!uidSlug && (
          <div className="flex items-center space-x-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", duration: 1.5 },
              }}
            >
              <button className="p-2 px-3 text-xs text-white bg-gray-800 self-center rounded-md outline-none focus:outline-none transform transition hover:scale-105 active:scale-75">
                <Link
                  className="flex items-center space-x-2"
                  to="/accountSettings"
                >
                  <FiEdit size="1em" /> <span>Edit Profile</span>
                </Link>
              </button>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", duration: 1.5 },
              }}
            >
              <button
                onClick={() => {
                  const customId = "share-profile-toast-id";
                  navigator.clipboard.writeText(
                    `https://cafely.vercel.app/profile/${
                      profileData && profileData.uid
                    }`
                  );
                  toast.success(
                    `📋 Successfully copied profile link. Share it with your friends!`,
                    {
                      autoClose: 3000,
                      toastId: customId,
                    }
                  );
                }}
                className="flex items-center space-x-2 p-2 px-3 text-xs text-white bg-gray-800 self-center rounded-md outline-none focus:outline-none transform transition hover:scale-105 active:scale-75"
              >
                <RiFileCopy2Line size="1em" /> <span>Share Profile</span>
              </button>
            </motion.span>
          </div>
        )}

        {/* Bio */}
        <div className="flex flex-col relative border border-gray-100 max-w-2xl overflow-hidden rounded-md">
          <div className="text-center text-sm text-gray-600 p-5 whitespace-pre-wrap">
            {profileData
              ? profileData.bio
              : `That is the true genius of America - a faith in simple dreams, an
              insistence on small miracles. We meet at one of those defining
              moments - a moment when our nation is at war, our economy is in
              turmoil, and the American promise has been threatened once more.
              We did not go by choice, we went because of necessity.`}
          </div>
        </div>
        {/* Reviews and Ratings Count */}
        <div className="pt-8 flex items-center  sm:space-x-28 space-x-20 sm:flex-row">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">
              {profileData &&
                profileData.userRatings.filter((userRating) => {
                  return userRating.review;
                }).length}
            </h3>
            <p className="text-gray-600">Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">
              {profileData.userRatings.length}
            </h3>
            <p className="text-gray-600">
              {profileData.userRatings.length > 1 ? "Ratings" : "Rating"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileHeaderSkeleton = () => {
  return (
    <>
      {/* Profile Header Section */}
      <div className="flex flex-wrap w-full flex-col items-center px-4 space-y-5 mx-auto overflow-hidden text-center select-none">
        {/* Profile Photo */}
        <div className="h-36 w-36 rounded-full bg-white">
          <div
            className="h-full w-full rounded-full bg-gray-300 animate-pulse"
            style={{
              animationDuration: "1s",
            }}
          ></div>
        </div>
        <h1
          className="font-bold text-xl select-none bg-gray-400 rounded text-gray-400 animate-pulse"
          style={{
            animationDuration: "1s",
            animationDelay: "0.2s",
          }}
        >{`Barrack Obama`}</h1>
        {/* Bio */}
        <div className="flex flex-col relative border border-gray-100 max-w-2xl overflow-hidden rounded-md p-5 space-y-1 items-center w-11/12 sm:w-9/12">
          <p
            className="rounded text-center text-sm h-4 w-full bg-gray-200 animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "0.4s",
            }}
          ></p>
          <p
            className="rounded text-center text-sm h-4 w-8/12 bg-gray-200 animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "0.6s",
            }}
          ></p>
          <p
            className="rounded text-center text-sm h-4 w-9/12 bg-gray-200 animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "0.8s",
            }}
          ></p>
          <p
            className="rounded text-center text-sm h-4 w-11/12 bg-gray-200 animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "1s",
            }}
          ></p>
          <p
            className="rounded text-center text-sm h-4 w-6/12 bg-gray-200 animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "1.2s",
            }}
          ></p>
        </div>
        {/* Reviews and Ratings Count */}
        <div className="pt-8 flex items-center sm:space-x-28 space-x-20 sm:flex-row select-none">
          <div className="flex flex-col items-center space-y-1">
            <h3
              className="text-4xl font-bold bg-gray-300 rounded text-gray-300 animate-pulse"
              style={{
                animationDuration: "1s",
                animationDelay: "1.6s",
              }}
            >
              99
            </h3>
            <p
              className="text-gray-100 bg-gray-100 rounded h-5 animate-pulse"
              style={{
                animationDuration: "1s",
                animationDelay: "1.8s",
              }}
            >
              Reviews
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h3
              className="text-4xl font-bold bg-gray-300 rounded text-gray-300 animate-pulse"
              style={{
                animationDuration: "1s",
                animationDelay: "1.6s",
              }}
            >
              20
            </h3>
            <p
              className="text-gray-100 bg-gray-100 rounded h-5 animate-pulse"
              style={{
                animationDuration: "1s",
                animationDelay: "1.8s",
              }}
            >
              Ratings
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
