import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalProductCard from "./HorizontalProductCard";
import HorizontalProductCardSkeleton from "./Skeletons/HorizontalProductCardSkeleton";
import { Link } from "react-router-dom";

export default function TopProductsGrid() {
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
    <div>
      {products ? (
        products.map((product) => {
          return (
            <HorizontalProductCard key={product._id} productData={product} />
          );
        })
      ) : (
        <>
          <HorizontalProductCardSkeleton />
          <HorizontalProductCardSkeleton delayFactor={2} />
          <HorizontalProductCardSkeleton delayFactor={7} />
          <HorizontalProductCardSkeleton delayFactor={11} />
          <HorizontalProductCardSkeleton delayFactor={15} />
        </>
      )}
    </div>
  );
}
