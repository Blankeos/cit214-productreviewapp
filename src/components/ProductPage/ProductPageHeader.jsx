import React from "react";
import { Link } from "react-router-dom";

// Icons
import { MdRateReview } from "react-icons/md";

const ProductPageHeader = ({
  product,
  currentImageIndex,
  handleChangeImage,
  ...rest
}) => {
  return (
    <div
      className="flex w-full h-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
      style={{
        minHeight: "24rem",
      }}
    >
      {/* Image Container */}
      <div className="productpage-image-container">
        {/* Main Image */}
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
      <div className="md:w-8/12 p-8 md:p-12 flex flex-col justify-between rounded-md bg-white shadow-md text-sm flex-wrap border">
        <div className="flex flex-col space-y-3">
          <h1 className="font-extrabold text-3xl">{product && product.name}</h1>
          <p className="">{product && product.description}</p>
        </div>
        <Link to={product && `/review/${product._id}`}>
          <button className="flex items-center space-x-1 bg-primary text-white px-4 py-4 rounded-md mt-8 transform hover:translate-y-1 transition ease-in-out">
            <MdRateReview size="1.2em" />
            <span>Rate This Product</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export const ProductPageHeaderSkeleton = () => {
  return (
    <div
      className="flex w-full h-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
      style={{
        minHeight: "24rem",
      }}
    >
      {/* Image Container */}
      <div className="border-r border-t border-l relative flex w-full bg-gray-50 shadow-md rounded-md overflow-hidden">
        {/* Main Image */}
        <div class="relative flex-grow w-full h-full flex-shrink-0">
          <div className="opacity-60 hidden md:block absolute top-0 left-0 w-full h-full"></div>
        </div>
        {/* Other Images */}
        <div className="absolute flex flex-col w-20 h-full"></div>
      </div>
      {/* Product Description Body */}
      <div className="md:w-8/12 p-8 md:p-12 flex flex-col justify-between rounded-md bg-white shadow-md text-sm flex-wrap border">
        <div className="flex flex-col space-y-3">
          <h1 className="font-extrabold text-3xl text-gray-400 bg-gray-400 rounded">
            Product Name
          </h1>
          <div className="flex flex-col space-y-1">
            <p className="bg-gray-200 text-gray-200 w-10/12 rounded">.</p>
            <p className="bg-gray-200 text-gray-200 w-5/12 rounded">.</p>
            <p className="bg-gray-200 text-gray-200 w-7/12 rounded">.</p>
            <p className="bg-gray-200 text-gray-200 w-9/12 rounded">.</p>
            <p className="bg-gray-200 text-gray-200 w-4/12 rounded">.</p>
          </div>
        </div>
        <div>
          <button
            disabled
            className="flex items-center space-x-1 bg-primary text-white px-4 py-4 rounded-md mt-8 transform hover:translate-y-1 transition ease-in-out disabled:opacity-50"
          >
            <MdRateReview size="1.2em" />
            <span>Rate This Product</span>
          </button>
        </div>
      </div>
    </div>
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

export default ProductPageHeader;
