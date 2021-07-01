import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useAdminAuth } from "../../contexts/AdminAuthContext";

// Services
import { addNewProduct } from "../../services/restServices";
import { produce } from "immer";
import { generate } from "shortid";
import { toast } from "react-toastify";

// Icons
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { MdError, MdDashboard } from "react-icons/md";

// Components
import ErrorJSX from "../ErrorJSX";

const AdminDashboard = () => {
  const { isAuthorized } = useAdminAuth();

  return (
    <>
      <Helmet>
        <title>Cafe.ly | Admin Dashboard</title>
        <meta name="title" content="Cafe.ly | Admin Dashboard" />
        <meta
          name="description"
          content="User Reviews and Recommendations of Best Tasting Coffee at Cafe.ly. Defining the best coffee experience. In culture, in taste!"
        />
      </Helmet>

      <>
        {/* Page Container */}
        <div className="flex-grow pb-14 pt-5 p-2 md:p-10 bg-gray-800 h-full text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-bold text-white text-3xl mb-2 flex space-x-1 items-center px-2">
              <MdDashboard size="2rem" />
              <span>Admin Dashboard</span>
            </h1>
            <p className="text-sm mb-5 px-2">What do you want to do?</p>
            <div className="bg-white rounded-xl text-gray-700 flex flex-col overflow-hidden">
              {/* Tabs */}
              <div className="flex overflow-x-auto">
                <TabButton active={true}>Add New Products</TabButton>
                <TabButton>Update Product Data</TabButton>
                <TabButton>Delete Products</TabButton>
              </div>
              {/* Tab Content */}
              <div className="p-8">
                <AddNewProductsTab />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

const TabButton = ({ active, children, ...rest }) => {
  return (
    <button
      className={`${
        active ? "bg-primary text-white" : "hover:bg-yellow-100"
      } p-4 text-sm outline-none focus:outline-none transition whitespace-nowrap`}
    >
      {children}
    </button>
  );
};

const AddNewProductsTab = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const [images, setImages] = useState([{ id: generate(), link: "" }]);
  const [loading, setLoading] = useState(false);

  //   functions
  const handleInputChange = (e, name) => {
    setInput((current) => {
      return {
        ...current,
        [name]: e.target.value,
      };
    });
  };

  const addNewImage = () => {
    const mutatedImages = images.concat({ id: generate(), link: "" });
    if (mutatedImages.length > 3) return;
    setImages(mutatedImages);
  };

  const deleteImage = (id) => {
    const mutatedImages = images.filter((image) => id !== image.id);
    if (mutatedImages.length < 1) return;
    setImages(mutatedImages);
  };

  const handleImageInputChange = (e, i) => {
    const value = e.target.value;
    setImages((current) =>
      produce(current, (v) => {
        v[i].link = value;
      })
    );
  };

  const clearInput = () => {
    setImages([{ id: generate(), link: "" }]);
    setInput({
      name: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (
      input.name === "" ||
      input.description === "" ||
      images[0].link === ""
    ) {
      setLoading(false);
      toast.error(
        ErrorJSX(
          <MdError size="1.3em" />,
          "Some fields are empty. Check your inputs."
        ),
        {
          autoClose: 5000,
        }
      );
      return;
    }
    try {
      const payload = {
        name: input.name,
        description: input.description,
        images: images.map((image) => image.link),
      };

      await addNewProduct(payload.name, payload.description, payload.images);

      toast.success(`🥂 Successfully added the product!`, {
        autoClose: 5000,
      });

      console.log(payload);
      clearInput();
    } catch (err) {
      toast.error(
        ErrorJSX(
          <MdError size="1.3em" />,
          "Failed to add the product. Check your inputs."
        ),
        {
          autoClose: 5000,
        }
      );
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      <label>Product Name</label>
      <input
        className="border border-gray-300 rounded-sm p-2 inpfield-transition text-sm"
        placeholder="What do you call the product?"
        value={input.name}
        onChange={(event) => handleInputChange(event, "name")}
      ></input>
      <label>Product Description</label>
      <textarea
        className="border border-gray-300 rounded-sm p-2 max-h-48 inpfield-transition text-sm"
        style={{ minHeight: "9rem" }}
        placeholder="What's the product about?"
        value={input.description}
        onChange={(event) => handleInputChange(event, "description")}
      ></textarea>
      <span className="flex space-x-2">
        <label>Images ({images.length}/3)</label>
        <span>
          <button
            type="button"
            className="bg-primary p-1 text-white rounded-full outline-none focus:outline-none"
            onClick={addNewImage}
          >
            <AiOutlinePlus key={generate()} />
          </button>
        </span>
      </span>

      {images.map((image, i) => {
        return (
          <ImageInput
            key={image.id}
            image={image}
            index={i}
            onDelete={(e) => {
              deleteImage(image.id);
            }}
            onChange={(e) => {
              handleImageInputChange(e, i);
            }}
          />
        );
      })}
      <div>
        <button
          disabled={loading}
          className="default-btn"
          onClick={handleSubmit}
        >
          Add it
        </button>
      </div>
    </form>
  );
};

const ImageInput = ({ image, index, onDelete, onChange, ...rest }) => {
  return (
    <div className="flex space-x-3 items-center text-sm">
      <label>
        <span className="mr-2">Link</span>
        <span>{index + 1}</span>
      </label>
      <input
        value={image.link}
        onChange={onChange}
        className="border border-gray-300 rounded-sm px-2 py-1 max-h-48 inpfield-transition w-full"
      ></input>
      <button
        onClick={onDelete}
        type="button"
        className="text-red-500 outline-none focus:outline-none hover:text-red-600 transition"
      >
        <AiFillDelete size="1.5em" />
      </button>
    </div>
  );
};

export default AdminDashboard;
