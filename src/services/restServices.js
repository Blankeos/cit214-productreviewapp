import axios from "axios";

// GET requests
export const getProfile = async (createToken) => {
  const url = "/api/profile";
  const header = await createToken();
  try {
    const res = await axios.get(url, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllProducts = async () => {
  const url = "/api/products";
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

export const addToPhonebook = async (createToken, name, number) => {
  const url = "/api/testToken";
  const header = await createToken();
  const payload = {
    name,
    number,
  };
  try {
    const res = await axios.post(url, payload, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
