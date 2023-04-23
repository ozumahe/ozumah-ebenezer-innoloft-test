import apiCall from "../utils/axois";

const getAppConfiguration = () =>
  apiCall("GET", `/configuration/${process.env.REACT_APP_ID || 1}/`).then(
    (res) => res.data
  );

export { getAppConfiguration };
