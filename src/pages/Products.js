import React from "react";
import ProductCard from "../components/ProductCard.js";
import ProductGrid from "../components/ProductGrid.js";

// search engine of all products on the site
// grid/list of product cards

const Products = () => {
  return (
    <div className="mt-10">
      <h1 className="max-w-6xl mx-auto text-4xl px-8 text-blue-500 mb-5">
        Products
      </h1>
      <ProductGrid />
    </div>
  );
};

export default Products;
