import axios from "../utility/axios";

const getAllCategory = async () => {
  return await axios.get("/get-all-category");
};

module.exports = {
  getAllCategory: getAllCategory,
};
