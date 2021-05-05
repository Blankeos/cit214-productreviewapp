import React from "react";
import { MdRateReview } from "react-icons/md";
import StarMeter from "./StarMeter";

export default function HorizontalProductCard({ productData, ...rest }) {
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
            Pumpkin spice cream rich single origin, bar french press aromatic
            that latte. Crema, white organic crema steamed grounds mazagran
            organic mazagran cultivar.
          </p>
        </div>
        <div className="text-xs mt-5 sm:text-sm sm:mt-0">
          <p>18 Reviews</p>
          <StarMeter rating={1.3} />
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
