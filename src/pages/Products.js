import React from "react";
import { IconContext } from "react-icons";
import { RiSearch2Line } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosSad } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import StarMeter from "../components/StarMeter";
// import { BsX } from "react-icons/bs";
// import ProductGrid from "../components/ProductGrid.js";

// search engine of all products on the site
// grid/list of product cards

const Products = () => {
  return (
    <div className="text-gray-800 bg-white w-full flex-grow h-full px-2 sm:px-8 pt-12 pb-24">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Product Search Section */}
        <div className="flex flex-wrap w-full gap-5">
          <div className="flex-grow">
            <h1 className="font-extrabold text-3xl mb-5 flex space-x-3">
              <GiShoppingBag className="text-primary" />
              <span>Products</span>
            </h1>
            {/* Search Bar */}
            <div className="mb-5 flex space-x-1 items-center bg-white p-2 rounded text-gray-600 shadow-md border border-gray-100">
              <RiSearch2Line className="mx-0.5" />
              <input
                className="flex-grow p-1 outline-none focus:ring-primary focus:ring-1 focus:rounded-sm"
                placeholder="What are you looking for?"
              ></input>
              {/* <BsX className="" /> */}
            </div>
          </div>
          <div className="w-56 h-1"></div>
        </div>
        {/* Page Grid */}
        <div className="flex flex-wrap w-full gap-5">
          {/* Primary Left Bar */}
          <div className="flex-grow">
            {/* Product Grid */}
            <div className="px-4 py-4 shadow-md rounded-2xl border border-gray-100 overflow-hidden bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div className="break md:hidden" />
          {/* Right SideBar */}
          <div className="w-56 flex">
            {/* Can't Find Your Product? */}
            <div className="bg-white w-56 h-64 p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col space-y-3">
              <h2 className="font-extrabold text-2xl inline">
                <IoIosSad className="" size="1.5em" />
                <span> Can't Find A Specific Product?</span>
              </h2>
              <p className="text-xs">Contribute to our database.</p>
              <button className="rounded outline-none border-2 border-primary text-primary flex-grow hover:bg-primary hover:text-white transition-all focus:ring-0 focus:outline-none">
                Add a Product
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductGrid /> */}
    </div>
  );
};

export const ProductCard = () => {
  return (
    <div className="border border-gray-100 bg-white text-gray-800 flex flex-col relative group hover:text-white overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-80 sm:h-40 md:h-48">
        <div className="bg-gradient-to-t from-transparent via-transparent to-black opacity-70 w-full h-full absolute"></div>
        <div
          className="bg-gray-100 w-full h-full"
          style={{
            backgroundImage: `url(https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/news/manufacturers/coca-cola-launches-new-range-of-at-home-costa-coffee-products/11425504-1-eng-GB/Coca-Cola-launches-new-range-of-at-home-Costa-Coffee-products_wrbm_large.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      {/* Stars */}
      <div className="absolute top-0 right-0 p-2">
        <StarMeter
          rating={4.3}
          shadeClass="text-yellow-400"
          lightClass="text-white"
          lightIcon={<FaStar className="shadow-2xl" />}
        />
      </div>
      {/* Body */}
      <div className="p-2 bg-white group-hover:bg-gray-900">
        <h3 className="font-bold text-sm">Product Name</h3>
        <p className="text-xs">18 Reviews</p>
        <p className="text-xs">25 Ratings</p>
      </div>
    </div>
  );
};

export default Products;
