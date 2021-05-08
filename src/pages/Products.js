import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosSad } from "react-icons/io";
import StarMeter from "../components/StarMeter";
import PageContainer from "../components/PageContainer";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/api/products", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          const results = response.data.map((product) => {
            return {
              ...product,
            };
          });
          setProducts(results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <PageContainer>
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
            <div className="flex w-full mb-5 gap-2">
              <div className="flex-grow flex space-x-1 items-center bg-white p-2 rounded text-gray-600 shadow-md border border-gray-100">
                <RiSearch2Line className="mx-0.5" />
                <input
                  className="flex-grow p-1 outline-none focus:ring-primary focus:ring-1 focus:rounded-sm"
                  placeholder="What are you looking for?"
                ></input>
                {/* <BsX className="" /> */}
              </div>
              <button className="hidden sm:block md:hidden bg-primary px-3 rounded text-white shadow-md">
                Add a Product
              </button>
            </div>
          </div>
          <div className="w-56 h-1 hidden md:block"></div>
        </div>
        {/* Page Grid */}
        <div className="flex flex-wrap w-full gap-5">
          {/* Primary Left Bar */}
          <div className="flex-grow w-8/12">
            {/* Product Grid */}
            <div className="px-4 py-4 shadow-md rounded-2xl border border-gray-100 overflow-hidden bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
              {products ? (
                products.map((product) => {
                  return (
                    <Link to={`/products/${product._id}`}>
                      <ProductCard key={product._id} productData={product} />
                    </Link>
                  );
                })
              ) : (
                <>
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                </>
              )}
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
              <button className="select-none rounded outline-none border-2 border-primary text-primary flex-grow hover:bg-primary hover:text-white transition-all focus:ring-0 focus:outline-none">
                Add a Product
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductGrid /> */}
    </PageContainer>
  );
};

export const ProductCard = ({ productData, ...rest }) => {
  return (
    <div className="border border-gray-100 bg-white text-gray-800 flex flex-col relative group hover:text-white overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-80 sm:h-40 md:h-48">
        <div className="bg-gradient-to-t from-transparent via-transparent to-black opacity-70 w-full h-full absolute"></div>
        <div
          className="bg-gray-100 w-full h-full"
          style={{
            backgroundImage: `url(${
              productData.images
                ? productData.images[0]
                : "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/news/manufacturers/coca-cola-launches-new-range-of-at-home-costa-coffee-products/11425504-1-eng-GB/Coca-Cola-launches-new-range-of-at-home-Costa-Coffee-products_wrbm_large.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      {/* Stars */}
      <div className="absolute top-0 right-0 p-2 flex space-x-2 items-end">
        <StarMeter
          rating={4.3}
          iconSize="1.2em"
          // shadeClass="text-yellow-400"
          lightClass="text-white"
        />
        <span className="text-white text-xs">4.1</span>
      </div>
      {/* Body */}
      <div className="flex flex-col p-2 bg-white group-hover:bg-gray-900 transition-all duration-300">
        <h3 className="font-bold text-sm">
          {productData.name ? productData.name : "No Name Found"}
        </h3>
        <p className="text-xs">18 Reviews</p>
        <p className="text-xs">25 Ratings</p>
      </div>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-100 bg-white text-gray-800 flex flex-col relative group hover:text-white overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-80 sm:h-40 md:h-48">
        <div className="bg-gray-100 w-full h-full"></div>
      </div>
      {/* Stars */}
      <div className="absolute top-0 right-0 p-2 flex space-x-2 items-center">
        <StarMeter
          iconSize="1.2em"
          // shadeClass="text-yellow-400"
          lightClass="text-gray-300"
        />
        <span className="text-gray-300 text-xs bg-gray-300 rounded">0.0</span>
      </div>
      {/* Body */}
      <div className="p-2 bg-white">
        <h3 className="font-bold text-sm bg-gray-400 text-gray-400 w-28 rounded">
          Product Name
        </h3>
        <p className="my-1 rounded text-xs bg-gray-200 text-gray-200 w-16">s</p>
        <p className="rounded text-xs bg-gray-200 text-gray-200 w-14">s</p>
      </div>
    </div>
  );
};

export default Products;
