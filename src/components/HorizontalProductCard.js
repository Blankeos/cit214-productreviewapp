import React from "react";
import { MdRateReview } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function HorizontalProductCard() {
  return (
    <div className="flex-col sm:flex-row sm:h-48 w-full border-t border-gray-100 flex overflow-hidden">
      {/* Image */}
      <div
        className="w-full h-28 sm:h-full sm:w-48 bg-gray-100 flex-shrink-0"
        style={{
          backgroundImage: `url('https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/news/manufacturers/coca-cola-launches-new-range-of-at-home-costa-coffee-products/11425504-1-eng-GB/Coca-Cola-launches-new-range-of-at-home-Costa-Coffee-products_wrbm_large.jpg')`,
          backgroundSize: `cover`,
        }}
      ></div>
      {/* Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-sm sm:text-lg">Product Name</h3>
          <p className="text-xs sm:text-sm">
            Bacon ipsum dolor amet jowl jerky spare ribs capicola. Pork chop
            short ribs picanha, alcatra ground round flank tenderloin shoulder
            t-bone.
          </p>
        </div>
        <div className="text-xs mt-5 sm:text-sm sm:mt-0">
          <p>18 Reviews</p>
          {/* Stars */}
          <div className="flex">
            <div className="relative flex text-gray-200 self-start">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              {/* Stars Inner */}
              <div
                class="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
                style={{ width: "70%" }}
              >
                <div className="text-primary flex w-24">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Button CTA */}
      <div className="bg-white h-full sm:w-20 flex-shrink-0 flex justify-end pb-5 pr-5 sm:p-5">
        <button className="bg-brown-200 h-10 w-10 rounded flex justify-center items-center shadow focus:outline-none outline-none transform transition active:scale-90 hover:scale-110 overflow-hidden focus:ring focus:ring-offset-2 focus:ring-brown-200 radius-active">
          <MdRateReview className="text-white" size="1.2em" />
        </button>
      </div>
    </div>
  );
}
