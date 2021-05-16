import axios from "axios";
import React, { useEffect, useState } from "react";

// Context API
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// Components
import PageContainer from "../components/PageContainer";

// Icons
import { MdRateReview } from "react-icons/md";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleChangeImage(imageIndex) {
    setCurrentImageIndex(imageIndex);
  }

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
    <PageContainer className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Container */}
        <div
          className="flex w-full h-full space-x-2"
          style={{
            minHeight: "24rem",
          }}
        >
          {/* Image Container */}
          <div
            className="border-r border-t border-l relative flex w-full bg-gray-50 shadow-md rounded-md overflow-hidden"
            style={{
              minHeight: "24rem",
              maxHeight: "28rem",
            }}
          >
            {/* Ang Image mismo */}
            <div class="relative flex-grow w-full h-full flex-shrink-0">
              {product && (
                <>
                  <div
                    className="opacity-60 hidden md:block absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${
                        product && product.images[currentImageIndex]
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: `blur(5px)`,
                    }}
                  ></div>
                  {/* <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${
                        product && product.images[currentImageIndex]
                      })`,
                      backgroundSize: "1rem",
                      backgroundPosition: "center",
                      zIndex: "-1",
                    }}
                  ></div> */}
                  <img
                    className="relative object-center object-cover md:object-contain h-full w-full"
                    src={product.images[currentImageIndex]}
                    alt="Product"
                  />
                </>
              )}
            </div>
            {/* Other Images */}
            <div className="absolute flex flex-col w-20 h-full">
              {product &&
                product.images.map((imageUrl, i) => (
                  <AltImageButton
                    key={i}
                    imageUrl={imageUrl}
                    onClick={() => handleChangeImage(i)}
                  />
                ))}
            </div>
          </div>
          {/* Product Description Body */}
          <div className="w-8/12 p-8 md:p-12 flex flex-col justify-between rounded-md bg-white shadow-md text-sm flex-wrap border">
            <div className="flex flex-col space-y-3">
              <h1 className="font-extrabold text-3xl">
                {product && product.name}
              </h1>
              <p className="">{product && product.description}</p>
            </div>
            <Link to="/review/productId">
              <button className="flex items-center space-x-1 bg-darkGray text-white px-4 py-4 rounded-md mt-8 transform hover:translate-y-1 transition ease-in-out">
                <MdRateReview size="1.2em" />
                <span>Rate This Product</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
    // <PageContainer className="bg-purple-200 text-gray-800">
    //   <div className="max-w-6xl mx-auto">
    //     {/* Container */}
    //     <div
    //       className="flex bg-red-500 rounded-md overflow-hidden shadow-md"
    //       style={{
    //         minHeight: "24rem",
    //       }}
    //     >
    //       {/* Image */}
    //       <div className="flex justify-center items-center w-6/12 h-full bg-gray-300 overflow-hidden">
    //         {product ? (
    //           <img
    //             className="bg-gray-300 object-center object-cover w-full h-full"
    //             src={product.images[0]}
    //             alt="Product"
    //           ></img>
    //         ) : (
    //           "Loading Image..."
    //         )}
    //       </div>
    //       {/* Body */}
    //       <div className="bg-primary flex flex-col py-12 px-12 justify-between w-6/12 h-full">
    //         <div className="flex flex-col space-y-8">
    //           <h1 className="font-extrabold text-5xl">
    //             {product ? product.name : "Loading Product Name..."}
    //           </h1>
    //           <p>
    //             {product
    //               ? product.description
    //               : "Loading Product Description..."}
    //           </p>
    //         </div>
    //         <Link to="/review/productId">
    //           <button className="bg-darkGray text-primary px-4 py-3 rounded-md">
    //             Rate This Product
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </PageContainer>
  );
};

const AltImageButton = ({ imageUrl, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-20 h-20 shadow-xl overflow-hidden outline-none focus:outline-none"
    >
      <div
        className="w-full h-full transition duration-300 transform ease-in-out opacity-60 hover:opacity-100 hover:scale-110"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </button>
  );
};

export default ProductPage;
