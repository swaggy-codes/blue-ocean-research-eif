// const API_BASE_URL = "http://3.7.37.104:8080";

// const API_BASE_URL = "http://3.6.7.55:8080";

import { API_BASE_URL } from "../../Utils/BaseUrl";

const API = {
  GET_ALL_VARIABLES: API_BASE_URL + "/economical/combined",
  GET_CORRELATION_STATS: API_BASE_URL + "/corr",
  GET_CORRELATION_IMAGE: API_BASE_URL + "/image",
  // GET_BALANCE_SHEET_DATA_BY_COMPANY + "/"

  GET_ALL_IIFL_RECOMMENDATION: API_BASE_URL + "/recom/iifl",
  GET_ALL_MC_RECOMMENDATION: API_BASE_URL + "/recom/mc",
  GET_ALL_ICICI_RECOMMENDATION: API_BASE_URL + "/recom/icici",
  GET_ALL_FIVEPAISA_RECOMMENDATION: API_BASE_URL + "/recom/5paisa",
  GET_ALL_SBI_RECOMMENDATION: API_BASE_URL + "/recom/sbi",
};

export default API;
