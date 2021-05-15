import axios from "axios";

export const addToPhonebook = async (createToken, name, number) => {
  const url = "/api/testToken";
  const header = await createToken();
  const payload = {
    name,
    number,
  };
  console.log(payload);
  console.log(header);
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
