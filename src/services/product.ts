import apiCall from "../utils/axois";

const getProduct = () =>
  apiCall("GET", "/product/6781/").then((res) => res.data);

export { getProduct };
