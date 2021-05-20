import axios from "axios";

// GET requests
export const getProfile = async (uid) => {
  const url = `/api/profile/${uid}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllProducts = async (sortingOrder) => {
  const url = `/api/products${
    sortingOrder ? `?sortByRating=${sortingOrder}` : ""
  }`;
  try {
    const res = await axios.get(url);
    const results = res.data.map((product) => {
      return {
        ...product,
      };
    });
    return results;
  } catch (e) {
    console.error(e);
  }
};

export const getOneProduct = async (productID) => {
  const url = `/api/products/${productID}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getOneProductAndReviews = async (productID) => {
  const url = `/api/productsAndRatings/${productID}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

// idk obsolete lang ni guro...
export const searchProductWithText = async (createToken, inputText) => {
  const url = `/api/products?name=${inputText}`;
  const header = await createToken();
  try {
    const res = await axios.get(url, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

// POST requests
export const addNewUser = async (createToken, email, password, displayName) => {
  const url = "/api/register";
  const header = await createToken();
  const payload = {
    email,
    password,
    displayName,
  };
  const res = await axios.post(url, payload, header);
  return res.data;
};

export const addReview = async (createToken, productID, rating, review) => {
  const url = "/api/addReview";
  const header = await createToken();
  const payload = {
    productID,
    rating,
    review,
  };

  const res = await axios.post(url, payload, header);
  return res.data;
};

export const updateProfile = async (
  createToken,
  displayName,
  bio,
  photoURL
) => {
  const url = "/api/updateProfile";
  const header = await createToken();
  const payload = {
    displayName,
    bio,
    photoURL,
  };

  const res = await axios.post(url, payload, header);
  return res.data;
};
