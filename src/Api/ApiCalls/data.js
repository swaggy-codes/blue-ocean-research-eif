import API from "../ApiSettings/apiEndpoints";
import { wrappedGet } from "../ApiSettings/apiFunctions";

export const getAllVariablesList = () => {
  return wrappedGet(`${API.GET_ALL_VARIABLES}?variables=interest,market,tax`);
};
