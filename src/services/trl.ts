import apiCall from "../utils/axois";

const getTrlList = () => apiCall("GET", "/trl/").then((res) => res.data);

export { getTrlList };
