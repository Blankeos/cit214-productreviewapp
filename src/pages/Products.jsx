import React, { useEffect, useState } from "react";

// Context API & Hooks
import { Link } from "react-router-dom";

// Services
import { getAllProducts } from "../services/restServices";
import Fuse from "fuse.js";
import { Helmet } from "react-helmet";

// Components
import StarMeter from "../components/StarMeter";
import PageContainer from "../components/PageContainer";
import FlipMove from "react-flip-move";

// Icons
import { RiSearch2Line } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosSad } from "react-icons/io";

// TippyJS
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/animations/scale.css";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [queriedProducts, setQueriedProducts] = useState("");

  const [fuse, setFuse] = useState(null);

  async function fetchData() {
    const results = await getAllProducts();
    setProducts(results);

    const fuseObject = new Fuse(results, {
      keys: ["name", "description"],
      threshold: 0.4,
    });

    setFuse(fuseObject);
  }

  const fuzzySearch = (value) => {
    if (value.length <= 0) {
      return products.map((product) => ({ item: product }));
    }
    return fuse.search(value);
  };

  const handleSearch = (value) => {
    if (fuse) {
      setQueriedProducts(fuzzySearch(value));
    }
  };

  useEffect(() => {
    console.log(products ? products : "Products don't exist yo");
    if (products) {
      setQueriedProducts(products.map((product) => ({ item: product }))); // intializes queried products
    }
  }, [products]);

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, []);

  return (
    <>
      <Helmet>
        <title>Cafe.ly | Products</title>
        <meta name="title" content="Cafe.ly | Products" />
        <meta name="description" content="Browse all products on Cafe.ly!" />
      </Helmet>

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
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                  ></input>
                  {/* <BsX className="" /> */}
                </div>
                <Tippy
                  animation="scale"
                  inertia={true}
                  content={
                    <span>
                      😓 <b>Darn, Sorry!</b>
                      <br />
                      This feature is not
                      <br />
                      available for now.
                    </span>
                  }
                  placement="bottom"
                >
                  <button className="hidden sm:block md:hidden bg-primary px-3 rounded text-white shadow-md">
                    Add a Product
                  </button>
                </Tippy>
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
                {queriedProducts ? (
                  queriedProducts.length ? (
                    <FlipMove typeName={null}>
                      {queriedProducts.slice(0, 10).map((product) => {
                        return (
                          <div key={product.item._id}>
                            <ProductCard productData={product.item} />
                          </div>
                        );
                      })}
                    </FlipMove>
                  ) : (
                    <p className="text-gray-500 col-span-full">
                      No products of this name found :(
                    </p>
                  )
                ) : (
                  <>
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton className="hidden lg:block" />
                    <ProductCardSkeleton className="hidden lg:block" />
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
                <Tippy
                  animation="scale"
                  inertia={true}
                  content={
                    <span>
                      😓 <b>Darn, Sorry!</b>
                      <br />
                      This feature is not
                      <br />
                      available for now.
                    </span>
                  }
                  placement="bottom"
                >
                  <button className="select-none rounded outline-none border-2 border-primary text-primary flex-grow hover:bg-primary hover:text-white transition-all focus:ring-0 focus:outline-none">
                    Add a Product
                  </button>
                </Tippy>
              </div>
            </div>
          </div>
        </div>
        {/* <ProductGrid /> */}
      </PageContainer>
    </>
  );
};

export const ProductCard = ({ productData, ...rest }) => {
  return (
    <div className="h-full">
      <Link to={`/products/${productData._id}`}>
        <div className="border border-gray-100 bg-white text-gray-800 flex flex-col relative group overflow-hidden h-full">
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
              rating={
                productData && productData.averageRating
                  ? productData.averageRating
                  : 0
              }
              iconSize="1.2em"
              // shadeClass="text-yellow-400"
              lightClass="text-white"
            />
            <span className="text-white text-xs">
              {productData && productData.averageRating
                ? productData.averageRating.toFixed(1)
                : 0}
            </span>
          </div>
          {/* Body */}
          <div className="flex flex-col justify-between p-2 bg-white group-hover:text-white flex-grow group-hover:bg-primary transition-all duration-300">
            <h3 className="relative font-bold text-sm">
              {productData.name ? productData.name : "No Name Found"}
            </h3>

            <div>
              <p className="text-xs">
                {productData && productData.reviewCount
                  ? `${productData.reviewCount} ${
                      productData.reviewCount > 0 ? "Reviews" : "Review"
                    }`
                  : "No Reviews"}
              </p>
              <p className="text-xs">
                {productData && productData.ratingCount
                  ? `${productData.ratingCount} ${
                      productData.ratingCount > 0 ? "Ratings" : "Rating"
                    }`
                  : "No Ratings"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const ProductCardSkeleton = ({ className, ...rest }) => {
  return (
    <div className={`${className}`}>
      <div className="select-none border border-gray-100 bg-white text-gray-800 flex flex-col relative group hover:text-white overflow-hidden">
        {/* Product Image */}
        <div className="relative w-full h-80 sm:h-40 md:h-48">
          <div
            className="bg-gray-200 w-full h-full animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "0s",
            }}
          ></div>
        </div>
        {/* Stars */}
        <div
          className="absolute top-0 right-0 p-2 flex space-x-2 items-center animate-pulse"
          style={{
            animationDuration: "1s",
            animationDelay: "0.4s",
          }}
        >
          <StarMeter iconSize="1.2em" lightClass="text-gray-300" />
          <span className="text-gray-300 text-xs bg-gray-300 rounded">0.0</span>
        </div>
        {/* Body */}
        <div className="p-2 bg-white">
          <h3
            className="font-bold text-sm bg-gray-400 text-gray-400 w-28 rounded animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "0.3s",
            }}
          >
            Product Name
          </h3>
          <p
            className="my-1 rounded text-xs bg-gray-200 text-gray-200 w-16 animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "0.6s",
            }}
          >
            s
          </p>
          <p
            className="rounded text-xs bg-gray-200 text-gray-200 w-14 animate-pulse"
            style={{
              animationDuration: "1s",
              animationDelay: "0.9s",
            }}
          >
            s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
