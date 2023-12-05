const API_BASE_URL = "http://3.7.37.104:8080";

const API = {
  GET_ALL_VARIABLES: API_BASE_URL + "/economical/combined",
  GET_CORRELATION_STATS: API_BASE_URL + "/corr",
  GET_CORRELATION_IMAGE: API_BASE_URL + "/image",
  // GET_BALANCE_SHEET_DATA_BY_COMPANY + "/"
};

export default API;
