import API from "../ApiSettings/apiEndpoints";
import { wrappedGet } from "../ApiSettings/apiFunctions";

export const getAllVariablesList = () => {
  return wrappedGet(`${API.GET_ALL_VARIABLES}?variables=interest,market,tax`);
};

export const getSelectedVariablesData = (variableString) => {
  return wrappedGet(`${API.GET_ALL_VARIABLES}?variables=${variableString}`);
};

export const getVariableDetails = (variable) => {
  return wrappedGet(`${API.GET_ALL_VARIABLES}?variables=${variable}`);
};

export const getCorrelationStats = (endpointX, endpointY, paramX, paramY) => {
  return wrappedGet(`${API.GET_CORRELATION_STATS}?endpointX=${endpointX}&endpointY=${endpointY}&paramX=${paramX}&paramY=${paramY}`);
};

export const getCorrelationImage = (endpointX, endpointY, paramX, paramY) => {
  return wrappedGet(`${API.GET_CORRELATION_IMAGE}?endpointX=${endpointX}&endpointY=${endpointY}&paramX=${paramX}&paramY=${paramY}`);
};
