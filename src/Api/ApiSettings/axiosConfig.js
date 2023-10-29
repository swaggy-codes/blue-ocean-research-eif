import axios from "axios";
import API from "./apiEndpoints";

const fetchAxiosClient = () => {
  let instance = axios.create();

  return instance;
};

export default fetchAxiosClient();
