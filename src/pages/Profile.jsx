import React, { useEffect, useState } from "react";

// Context API
import { useAuth } from "../contexts/AuthContext";

// Services
import { getProfile } from "../services/restServices";

// Components
import ActivityCard, { ActivityCardSkeleton } from "../components/ActivityCard";
import PageContainer from "../components/PageContainer";

// Icons
import { FiEdit } from "react-icons/fi";
import { SiCoffeescript } from "react-icons/si";

//------------------

const Profile = () => {
  const { createToken } = useAuth();
  const [profile, setProfile] = useState(null);

  async function fetchData() {
    const result = await getProfile(createToken);
    console.log(result);
    setProfile(result);
  }

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, []);

  return (
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
          <ProfileHeader profileData={profile} />
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
                  <ActivityCard key={userRating._id} reviewData={userRating} />
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
  );
};

const ProfileHeader = ({ profileData, ...rest }) => {
  return (
    <>
      {/* Profile Header Section */}
      <div className="flex flex-wrap w-full flex-col items-center px-4 space-y-5 mx-auto overflow-hidden text-center">
        {/* Profile Photo */}
        <div className="flex items-center justify-center h-36 w-36 rounded-full bg-primary shadow">
          {profileData && !profileData.photoUrl && (
            <SiCoffeescript size="3.3em" className="text-white" />
          )}
        </div>

        <h1 className="font-bold text-xl">
          {profileData ? profileData.displayName : `Barrack Obama`}
        </h1>
        {/* Edit Profile Button */}
        <button className="hidden items-center space-x-2 p-2 px-3 text-xs text-white bg-darkGray self-center rounded-md outline-none focus:outline-none transform transition hover:scale-110 active:scale-75">
          <FiEdit size="1em" /> <span>Edit Profile</span>
        </button>
        {/* Bio */}
        <div className="flex flex-col relative border border-gray-100 max-w-2xl overflow-hidden rounded-md">
          <p className="text-center text-sm text-gray-600 p-5">
            {profileData
              ? profileData.bio
              : `That is the true genius of America - a faith in simple dreams, an
              insistence on small miracles. We meet at one of those defining
              moments - a moment when our nation is at war, our economy is in
              turmoil, and the American promise has been threatened once more.
              We did not go by choice, we went because of necessity.`}
          </p>
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
