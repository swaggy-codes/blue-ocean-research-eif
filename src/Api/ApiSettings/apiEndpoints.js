const API_BASE_URL = "http://13.235.113.99:8080";

const API = {
  GET_ALL_VARIABLES: API_BASE_URL + "/economical/combined",
  GET_CORRELATION_STATS: API_BASE_URL + "/corr",
  GET_CORRELATION_IMAGE: API_BASE_URL + "/image",
};

export default API;
