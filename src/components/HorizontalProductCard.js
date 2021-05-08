import React from "react";
import { MdRateReview } from "react-icons/md";
import StarMeter from "./StarMeter";
import { Link } from "react-router-dom";

export default function HorizontalProductCard({ productData, ...rest }) {
  return (
    <div className="flex-col sm:flex-row sm:h-64 md:h-52 w-full border-t border-gray-100 flex overflow-hidden">
      {/* Image */}
      <Link to={`/product/${productData._id}`}>
        <div
          className="w-full h-64 sm:h-full sm:w-48 bg-gray-100 flex-shrink-0"
          style={{
            backgroundImage: `url(${
              productData.images
                ? productData.images[0]
                : "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/news/manufacturers/coca-cola-launches-new-range-of-at-home-costa-coffee-products/11425504-1-eng-GB/Coca-Cola-launches-new-range-of-at-home-Costa-Coffee-products_wrbm_large.jpg"
            })`,
            backgroundSize: `cover`,
            backgroundPosition: "center",
          }}
        ></div>
      </Link>
      {/* Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div className="flex space-x-10 justify-between">
          <div>
            <h3 className="font-bold text-sm sm:text-xl">
              {productData.name ? productData.name : "Product Name"}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              {productData.description
                ? productData.description.length >= 300
                  ? productData.description.slice(0, 300) + "..."
                  : productData.description
                : "Pumpkin spice cream rich single origin, bar french press aromatic that latte. Crema, white organic crema steamed grounds mazagran organic mazagran cultivar."}
            </p>
          </div>
          {/* Button CTA */}
          <div className="h-full flex-shrink-0 flex justify-end">
            <Link
              to={`/review/${productData._id}`}
              className="bg-brown-200 h-10 w-10 rounded flex justify-center items-center shadow focus:outline-none outline-none transform transition active:scale-90 hover:scale-110 overflow-hidden focus:ring focus:ring-offset-2 focus:ring-brown-200 radius-active"
            >
              <MdRateReview className="text-white" size="1.2em" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between text-xs mt-5 sm:text-sm sm:mt-0 text-gray-500">
          <p>18 Reviews</p>
          <div className="flex space-x-1 items-center">
            <StarMeter rating={2} iconSize="1.4em" />
            <span className="">4.0 (342)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
