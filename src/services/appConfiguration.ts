import apiCall from "../utils/axois";

const getAppConfiguration = () =>
  apiCall("GET", `/configuration/${process.env.REACT_APP_ID}/`);

export { getAppConfiguration };
