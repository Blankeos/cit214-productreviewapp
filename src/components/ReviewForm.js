import React, { useState, useEffect } from "react";

// ContextAPI & Hooks
import { useSelect } from "react-select-search";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";

// Components
import StarRating from "./StarRating";
import SelectSearch from "react-select-search";
import AsyncSlect from "react-select/async";
import Select from "react-select";
import StarMeter from "./StarMeter";
import ErrorJSX from "./ErrorJSX";

// Services
import fuzzySearch from "../services/fuzzySearch";
import { toast } from "react-toastify";
import {
  getAllProducts,
  getOneProduct,
  addReview,
} from "../services/restServices";

// Icons
import { MdRateReview, MdError } from "react-icons/md";
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";

const ReviewForm = () => {
  // Data States
  const [products, setProducts] = useState(null);
  const { slug } = useParams();
  const { createToken, currentUser } = useAuth();
  const history = useHistory();

  // Field States
  const [selectedOption, setSelectedOption] = useState(null);
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Null Error Check
    if (!selectedOption) {
      toast.error(
        ErrorJSX(<MdError size="1.3em" />, `Product field is empty.`),
        {
          autoClose: 5000,
        }
      );
      setLoading(false);
      return;
    }
    if (!rating) {
      toast.error(
        ErrorJSX(<MdError size="1.3em" />, `Rating field is empty.`),
        {
          autoClose: 5000,
        }
      );
      setLoading(false);
      return;
    }

    // Submit
    try {
      await addReview(createToken, selectedOption.value, rating, review);
      history.push(`/products/${selectedOption.value}`);
      toast.success(`😃 Thanks for reviewing, ${currentUser.displayName}!`, {
        autoClose: 5000,
      });
    } catch {
      toast.error(
        ErrorJSX(<MdError size="1.3em" />, "Failed to post review."),
        {
          autoClose: 5000,
        }
      );
    }
    setLoading(false);
  };

  const fetchProducts = async () => {
    if (slug) {
      const defaultOption = await getOneProduct(slug);
      const selectedOption = createProductOption(
        defaultOption.name,
        defaultOption._id,
        defaultOption
      );
      setSelectedOption(selectedOption);
      console.log("Fetched Default Option!");
    }
    const result = await getAllProducts();
    setProducts(result);
  };

  useEffect(() => {
    const unsubscribe = fetchProducts();
    return unsubscribe;
  }, []);

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#e89700", //text-primary
        primary25: "#FEF3C7", //text-yellow-100
        primary50: "#FDE68A", //text-yellow-200
        neutral50: "#9CA3AF", //text-gray-400
      },
    };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:max-w-6xl mx-auto px-3 lg:px-8 pb-24">
      <form className="overflow-hidden bg-white shadow-xl px-6 py-6 rounded-2xl border border-gray-100 flex flex-col space-y-3 col-span-1 lg:col-span-2">
        <h2 className="flex font-bold text-gray-600 space-x-2 text-2xl mb-5">
          <MdRateReview className="relative transform translate-y-1.5 text-primary" />
          <span>Review</span>
        </h2>
        <h2 className="text-xl text-gray-600">Product</h2>
        {/* Product Search Input */}
        {products ? (
          <ProductSearch
            products={products}
            customTheme={customTheme}
            onChange={setSelectedOption}
            defaultOption={selectedOption && selectedOption}
          />
        ) : (
          <ProductSearchSkeleton
            customTheme={customTheme}
            defaultOptionName={selectedOption && selectedOption.label}
          />
        )}
        {/* Rating Input */}
        <div className="flex space-x-2 items-center">
          <h2 className="text-xl text-gray-600">Rating</h2>
          <p className="sm:hidden text-gray-400 text-sm">
            {ratingLabel[rating]}
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <StarRating
            rating={rating}
            setRating={setRating}
            disabled={!products}
          />
          <p className="hidden sm:block text-gray-400 text-sm">
            {ratingLabel[rating]}
          </p>
        </div>
        {/* Review Input */}
        <h2 className="text-xl text-gray-600">Review</h2>
        <textarea
          className="border border-gray-300 rounded-sm p-2 h-36 max-h-48 inpfield-transition"
          style={{ minHeight: "9rem" }}
          placeholder="Describe your experience."
          onChange={(event) => setReview(event.target.value)}
        />
        {/* <button
          className="default-btn"
          type="submit"
          onClick={(e) => submit(e)}
          disabled={loading}
        >
          {loading ? (
            <div className="flex space-x-2 justify-center">
              <span>
                <AnimatedLoadingIcon size="1.4em" />
              </span>
              <span>Logging in...</span>
            </div>
          ) : (
            "Login"
          )}
        </button> */}
        <div>
          <button
            className="default-btn"
            disabled={!products || loading}
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="flex space-x-2 justify-center">
                <span>
                  <AnimatedLoadingIcon size="1.4em" />
                </span>
                <span>Posting...</span>
              </div>
            ) : (
              <>
                {"Post My "}
                <span className="font-semibold">
                  {review ? "Review" : "Rating"}
                </span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Product Info */}
      {selectedOption ? (
        <ProductInfo
          productID={selectedOption.value}
          productName={selectedOption.label}
          productData={selectedOption.productData}
        />
      ) : (
        <ProductInfoSkeleton />
      )}
    </div>
  );
};

const ProductInfo = ({ productID, productName, productData, ...rest }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const handleOnLoad = () => {
    setImageIsLoaded(true);
  };

  useEffect(() => {
    const unsubscribe = () => {
      setImageIsLoaded(false);
    };
    return unsubscribe;
  }, [productName]);
  return (
    <div className="flex flex-row col-span-1 order-first lg:order-last lg:flex-col">
      <div className="overflow-hidden space-x-4 sm:w-full md:w-8/12 lg:w-full lg:flex-col lg:space-y-4 lg:space-x-0 lg:p-0 lg:pb-6 lg:items-center bg-white flex flex-row p-4 rounded-2xl border border-gray-100 shadow-xl">
        {/* Image Div */}
        <Link to={`/products/${productID}`}>
          <div
            className="relative rounded-xl lg:rounded-none flex-shrink-0 w-32 h-32 lg:w-full lg:h-64 md:w-56 md:h-56 flex justify-center items-center"
            style={{
              backgroundImage: `url(${productData && productData.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!imageIsLoaded && <ImageLoadingSkeleton />}
            <img
              src={`url(${productData && productData.images[0]})`}
              className="hidden object-cover object-center h-auto w-full"
              onLoad={handleOnLoad}
              onError={handleOnLoad}
            ></img>
          </div>
        </Link>

        {/* Content Div */}
        <div className="flex flex-col w-10/12 space-y-4 md:p-2 justify-between">
          {/* ProductName could be a link */}
          <h2 className="text-xl md:text-2xl font-extrabold w-full text-gray-700">
            {productName ? (
              <Link
                className="hover:text-primary transition ease-in-out"
                to={`/products/${productID}`}
              >
                {productName}
              </Link>
            ) : (
              "Product Name Not Found"
            )}
            <div className="pt-2 flex space-x-2 items-center">
              <StarMeter
                rating={
                  productData && productData.averageRating
                    ? productData.averageRating
                    : 0
                }
              />
              <span className="font-normal text-sm text-gray-400">
                {productData && productData.averageRating
                  ? productData.averageRating.toFixed(1)
                  : 0}
              </span>
            </div>
          </h2>
          {/* Review and Rating Sound */}
          <div className="w-full space-y-2 text-gray-400">
            <div className="" style={{ animationDelay: "1.2s" }}>
              {productData && productData.ratingCount
                ? productData.ratingCount
                : 0}{" "}
              Ratings
            </div>
            <div className="" style={{ animationDelay: "1.6s" }}>
              {productData && productData.reviewCount
                ? productData.reviewCount
                : 0}{" "}
              Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ratingLabel = {
  1: <p className="text-red-500">Totally unsatisfied</p>,
  2: <p className="text-red-500">I don't like it</p>,
  3: <p className="text-primary">It's okay, I guess</p>,
  4: <p className="text-green-400">It's pretty good</p>,
  5: <p className="text-green-400">I love it!</p>,
};

const ImageLoadingSkeleton = () => {
  return (
    <div
      className="relative rounded-xl lg:rounded-none flex-shrink-0 bg-yellow-400 animate-pulse w-32 h-32 lg:w-full lg:h-64 md:w-56 md:h-56 flex justify-center items-center"
      style={{ animationDelay: "0.5s" }}
    >
      <AnimatedLoadingIcon size="3.5em" />
    </div>
  );
};

const ProductInfoSkeleton = () => {
  return (
    <div className="flex flex-row col-span-1 order-first lg:order-last lg:flex-col">
      <div className="overflow-hidden space-x-4 sm:w-full md:w-8/12 lg:w-full lg:flex-col lg:space-y-4 lg:space-x-0 lg:p-0 lg:pb-6 lg:items-center bg-white flex flex-row p-4 rounded-2xl border border-gray-100 shadow-xl">
        <div
          className="relative rounded-xl lg:rounded-none flex-shrink-0 bg-yellow-400 animate-pulse w-32 h-32 lg:w-full lg:h-64 md:w-56 md:h-56 flex justify-center items-center"
          style={{ animationDelay: "0.5s" }}
        >
          <AnimatedLoadingIcon size="3.5em" />
        </div>

        <div className="flex flex-col w-10/12 space-y-4">
          <div
            className="w-full h-12 bg-yellow-400 rounded-lg animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>

          <div className="w-full space-y-2">
            <div
              className="w-24 h-5 bg-yellow-200 rounded-lg animate-pulse"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="w-20 h-5 bg-yellow-200 rounded-lg animate-pulse"
              style={{ animationDelay: "1.6s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const createProductOption = (productName, productID, productData) => {
  return {
    label: productName,
    value: productID,
    productData: productData,
  };
};
const ProductSearchSkeleton = ({ customTheme, defaultOptionName, ...rest }) => {
  return (
    <Select
      placeholder={
        defaultOptionName
          ? `${defaultOptionName} (🤗 Still fetching though...)`
          : "Fetching Products..."
      }
      isDisabled
      noOptionsMessage={() => "No product of this name found :("}
      theme={customTheme}
    />
  );
};

const ProductSearch = ({
  products,
  customTheme,
  onChange,
  defaultOption,
  ...rest
}) => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const productOptions = products.map((product, i) => {
      return createProductOption(product.name, product._id, product);
    });
    setOptions(productOptions);
  }, [products]);

  return (
    <>
      {options ? (
        <Select
          //value={}//state selected users
          defaultValue={defaultOption && defaultOption}
          placeholder={"Search a product to review."}
          options={options}
          noOptionsMessage={() => "No product of this name found :("}
          theme={customTheme}
          onChange={onChange}
        />
      ) : (
        <ProductSearchSkeleton customTheme={customTheme} />
      )}
    </>
  );
};

export default ReviewForm;
