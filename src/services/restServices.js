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

export const addUser = async (createToken, name) => {
  const url = "/api/";
};

// export const getPhonebookEntries = async () => {
//     const header = await createToken();
//   try {
//       const res = await axios.get(url, header);
//       return res.data;
//     } catch (e) {
//       console.error(e);
//     }
// }
