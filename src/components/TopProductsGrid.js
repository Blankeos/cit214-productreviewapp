import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalProductCard from "./HorizontalProductCard";

export default function TopProductsGrid() {
  const [products, setProducts] = useState(null);

  useEffect(async () => {
    await axios
      .get("http://localhost:3000/api/products", {
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
  }, []);

  return (
    <div>
      {products &&
        products.map((product) => {
          return (
            <HorizontalProductCard key={product._idx} productData={product} />
          );
        })}
      {/* <p>{products.data}</p>
      {products.data.map((item, i) => {
        return <p key={i}>{item.name}</p>;
      })} */}
    </div>
  );
}
