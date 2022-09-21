import axios from "../utility/axios";

const getAllCategory = async () => {
  return await axios.get("/api/get-all-category");
};

const createProduct = async (data) => {
  return await axios.post("/api/post-product", data);
};

module.exports = {
  getAllCategory: getAllCategory,
  createProduct: createProduct,
};
