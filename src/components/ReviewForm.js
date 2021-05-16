import React, { useState, useEffect } from "react";

// ContextAPI & Hooks
import { useSelect } from "react-select-search";
import { useParams } from "react-router";

// Components
import StarRating from "./StarRating";
import SelectSearch from "react-select-search";
import AsyncSlect from "react-select/async";
import Select from "react-select";
import StarMeter from "./StarMeter";

// Services
import fuzzySearch from "../services/fuzzySearch";
import { getAllProducts, getOneProduct } from "../services/restServices";

// Icons
import { MdRateReview } from "react-icons/md";
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";

const ReviewForm = () => {
  // Data States
  const [products, setProducts] = useState(null);
  const { slug } = useParams();

  // Field States
  const [selectedOption, setSelectedOption] = useState(null);
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState(null);

  const [state, setState] = useState({
    productName: "",
    productReview: "",
  });

  const handleChange = (event, fieldName) => {
    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const submitReview = () => {
    console.log(state);
  };

  const fetchProducts = async () => {
    console.log(slug);

    if (slug) {
      const defaultOption = await getOneProduct(slug);
      const selectedOption = createProductOption(
        defaultOption.name,
        defaultOption._id,
        defaultOption.images[0]
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
        <h2 className="text-xl text-gray-600">Rating</h2>
        <StarRating rating={rating} setRating={setRating} />
        {/* Review Input */}
        <h2 className="text-xl text-gray-600">Review</h2>
        <textarea
          className="border border-gray-300 rounded-sm p-2 h-36 max-h-48 inpfield-transition"
          style={{ minHeight: "9rem" }}
          placeholder="Describe your experience."
          onChange={(event) => handleChange(event, "productReview")}
        />
        <div>
          <button className="default-btn" type="submit" onClick={submitReview}>
            Post My Review
          </button>
        </div>
      </form>

      {/* Product Info */}
      {selectedOption ? (
        <ProductInfo
          productName={selectedOption.label}
          imageUrl={selectedOption.image}
        />
      ) : (
        <ProductInfoSkeleton />
      )}
    </div>
  );
};

const ProductInfo = ({
  productName,
  rating,
  ratingCount,
  reviewCount,
  imageUrl,
  ...rest
}) => {
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
        <div
          className="relative rounded-xl lg:rounded-none flex-shrink-0 w-32 h-32 lg:w-full lg:h-64 md:w-56 md:h-56 flex justify-center items-center"
          style={{
            backgroundImage: `url(${imageUrl && imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!imageIsLoaded && <ImageLoadingSkeleton />}
          <img
            src={`url(${imageUrl && imageUrl})`}
            className="hidden object-cover object-center h-auto w-full"
            onLoad={handleOnLoad}
            onError={handleOnLoad}
          ></img>
        </div>

        {/* Content Div */}
        <div className="flex flex-col w-10/12 space-y-4 md:p-2 justify-between">
          {/* ProductName could be a link */}
          <h2 className="text-xl md:text-2xl font-extrabold w-full text-gray-700">
            {productName ? productName : "Product Name Not Found"}
            <div className="pt-2">
              <StarMeter rating={rating ? rating : 0} />
            </div>
          </h2>
          {/* Review and Rating Sound */}
          <div className="w-full space-y-2 text-gray-400">
            <div className="" style={{ animationDelay: "1.2s" }}>
              {ratingCount ? ratingCount : 0} Ratings
            </div>
            <div className="" style={{ animationDelay: "1.6s" }}>
              {reviewCount ? reviewCount : 0} Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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

const createProductOption = (productName, productID, productImageUrl) => {
  return {
    label: productName,
    value: productID,
    image: productImageUrl,
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
      return createProductOption(product.name, product._id, product.images[0]);
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
// const ProductSearch = ({ options, value, multiple, disabled }) => {
//   const [snapshot, valueProps, optionProps] = useSelect({
//     options,
//     value,
//     multiple,
//     disabled,
//   });

//   return (
//     <div class="bg-gray-300 w-full">
//       <button {...valueProps}>{snapshot.displayValue}</button>
//       {snapshot.focus && (
//         <ul>
//           {snapshot.options.map((option) => (
//             <li key={option.value}>
//               <button {...optionProps} value={option.value}>
//                 {option.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export const ProductSearch = () => {
//   const countries = [
//     { name: "Swedish", value: "sv" },
//     { name: "English", value: "en" },
//   ];
//   return (
//     <SelectSearch
//       options={countries}
//       search
//       filterOptions={fuzzySearch}
//       emptyMessage={() => (
//         <div style={{ textAlign: "center", fontSize: "0.8em" }}>
//           Not found renderer
//         </div>
//       )}
//       placeholder="Select your country"
//     />
//   );
// };

export default ReviewForm;
