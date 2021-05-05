import React from "react";
import StarMeter from "./StarMeter";

const ActivityCard = () => {
  return (
    <div className="flex border h-32 w-full rounded-md shadow-md overflow-hidden">
      {/* Product Image */}
      <div className="hidden sm:flex h-32 w-32 bg-black flex-shrink-0"></div>
      {/* Body */}
      <div className="p-5 py-3 flex-grow flex-col flex justify-between">
        <div>
          {/* Upper Part */}
          <div className="flex mb-1 space-x-5 items-center">
            <div className="font-bold text-lg">Product Name</div>
            <StarMeter rating={3} iconSize="1.2em" />
          </div>
          {/* Written Review */}
          <p className="text-gray-600 text-sm">
            Space, the final frontier. These are the voyages of the Starship
            Enterprise...
          </p>
        </div>
        <p className="text-gray-400 text-xs">December 4</p>
      </div>
    </div>
  );
};

export default ActivityCard;
