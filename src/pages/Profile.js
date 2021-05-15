import React, { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import PageContainer from "../components/PageContainer";
import { FiEdit } from "react-icons/fi";

import { getProfile } from "../services/restServices";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { createToken } = useAuth();
  const [profile, setProfile] = useState();

  async function fetchData() {
    const result = await getProfile(createToken);
    setProfile(result);
  }

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, []);

  return (
    <PageContainer className="">
      {/* Container // it's supposed to be white yes... */}
      <div className="max-w-6xl mx-auto bg-white relative">
        {/* Profile Header Section */}
        <div className="flex flex-wrap w-full flex-col items-center px-4 space-y-5 mx-auto overflow-hidden text-center">
          {/* Profile Photo */}
          <div className="h-36 w-36 rounded-full bg-black"></div>
          <h1 className="font-bold text-xl">
            {profile ? profile.displayName : `Barrack Obama`}
          </h1>
          {/* Edit Profile Button */}
          <button className="hidden items-center space-x-2 p-2 px-3 text-xs text-white bg-darkGray self-center rounded-md outline-none focus:outline-none transform transition hover:scale-110 active:scale-75">
            <FiEdit size="1em" /> <span>Edit Profile</span>
          </button>
          {/* Bio */}
          <div className="flex flex-col relative border border-gray-100 max-w-2xl overflow-hidden rounded-md">
            <p className="text-center text-sm text-gray-600 p-5">
              {profile
                ? profile.bio
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
              <h3 className="text-4xl font-bold">99</h3>
              <p className="text-gray-600">Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold">20</h3>
              <p className="text-gray-600">Ratings</p>
            </div>
          </div>
        </div>
        {/* Activity Section */}
        <div className="flex flex-col max-w-xl mx-auto items-center gap-3 rounded overflow-hidden">
          <h1 className="font-bold text-4xl my-20 mb-14">Activity</h1>
          <div className="flex flex-col w-full gap-3 overflow-hidden">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;
