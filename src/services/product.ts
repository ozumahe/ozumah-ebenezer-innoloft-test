import apiCall from "../utils/axois";

const getProduct = () =>
  apiCall("GET", "/product/6781/").then((res) => res.data);

const editProduct = (data: {}) =>
  apiCall("PUT", "/product/6781/", data).then((res) => res.data);

export { getProduct, editProduct };
