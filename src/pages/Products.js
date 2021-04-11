import React from "react";
import ProductCard from "../components/ProductCard.js";
import ProductGrid from "../components/ProductGrid.js";

// search engine of all products on the site
// grid/list of product cards

const Products = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue-500">Products</h1>
      <ProductGrid />
    </div>
  );
};

export default Products;
