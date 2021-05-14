import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  async function fetchData() {
    await axios
      .get(`/api/products/${slug}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, [product, slug]);

  return (
    <PageContainer className="bg-purple-200 text-gray-800">
      <div className="max-w-6xl mx-auto bg-purple-300">
        <div className="flex bg-red-500">
          {/* Image */}
          <div className="flex flex-shrink-0 justify-center items-center w-96 h-96 bg-gray-300 overflow-hidden">
            {product ? (
              <img
                className="bg-gray-300 object-center object-cover w-full h-96"
                src={product.images[0]}
                alt="Product"
              ></img>
            ) : (
              "Loading Image..."
            )}
          </div>
          {/* Body */}
          <div className="bg-primary flex flex-col py-12 px-12 justify-between w-full">
            <div className="flex flex-col space-y-8">
              <h1 className="font-extrabold text-5xl">
                {product ? product.name : "Loading Product Name..."}
              </h1>
              <p>
                {product
                  ? product.description
                  : "Loading Product Description..."}
              </p>
            </div>
            <Link to="/review/productId">
              <button className="default-btn">Review this product</button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductPage;
