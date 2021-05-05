import React from "react";
import ProductGrid from "../components/ProductGrid.js";

// search engine of all products on the site
// grid/list of product cards

const Products = () => {
  return (
    <div className="bg-brown-100 w-full flex-grow h-full px-2 sm:px-8 pt-12 pb-24">
      {/* Container */}
      <div className="max-w-6xl bg-blue-100 mx-auto">
        <div className="">
          <input placeholder="Find a product."></input>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
};

export default Products;
