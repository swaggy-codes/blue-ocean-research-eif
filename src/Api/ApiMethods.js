import axios from "axios";
import { API_BASE_URL } from "../Utils/BaseUrl";

export const getApiWithoutToken = (path) => {
  return axios.get(API_BASE_URL + path, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
