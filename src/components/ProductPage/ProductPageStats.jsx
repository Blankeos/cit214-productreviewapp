import React from "react";

// Components
import StarMeter from "../StarMeter";

// Icons
import { FaStar } from "react-icons/fa";

const ProductPageStats = ({ productData, ...rest }) => {
  return (
    <div className="max-w-5xl mx-auto py-10 mt-5">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl">
        {/* Right Part */}
        <div className="text-darkGray flex flex-col space-y-5 bg-white w-full px-8 pl-14 py-10 border-l border-t border-r md:border-r-0 rounded-tr-2xl md:rounded-tr-none rounded-tl-2xl md:rounded-bl-2xl justify-center">
          <div className="flex space-x-5 items-center">
            <span className="font-bold text-5xl">
              {productData && productData.ratingCount
                ? productData.ratingCount
                : 0}
            </span>
            <span>people have rated this product.</span>
          </div>
          <div className="flex space-x-5 items-center">
            <span className="font-bold text-5xl">
              {productData && productData.reviewCount
                ? productData.reviewCount
                : 0}
            </span>
            <span>people have reviewed this product.</span>
          </div>
        </div>
        {/* Left Part */}
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center bg-primary justify-end space-x-5 w-full px-8 py-10">
          <StarMeter
            iconSize="3em"
            shadeClass="text-yellow-300"
            lightClass="text-white"
            rating={
              productData && productData.averageRating
                ? productData.averageRating
                : 0
            }
          />
          <div className="text-white flex flex-col items-center">
            <span className="font-bold text-6xl">
              {productData && productData.averageRating
                ? productData.averageRating.toFixed(1)
                : 0}
            </span>
            <span className="text-center">Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// const BigStarMeter = ({ size, ...rest }) => {
//   return (
//     <div className="flex">
//       <div className="relative flex self-end bg-blue-100">
//         <FaStar size={size} className="text-primary" />
//         <div
//           className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
//           style={{ height: "20%" }}
//         >
//           <FaStar size={size} className="text-gray-300" />
//         </div>
//       </div>
//     </div>
//   );
// };
export default ProductPageStats;
