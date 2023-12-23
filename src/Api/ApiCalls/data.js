import API from "../ApiSettings/apiEndpoints";
import { wrappedGet } from "../ApiSettings/apiFunctions";

export const getAllVariablesList = () => {
  // return wrappedGet(`${API.GET_ALL_VARIABLES}?variables=interest,market,tax`);
  return wrappedGet(
    `${API.GET_ALL_VARIABLES}?variables=gdpGrowth,iip,cs,tradeBalance,inflation,market,gdp,gdpPC,gni,gniPC,debtToGDP,gnp,economicGrowth,manufacturing,tradeToGDP,exports,imports,fdi,tariff,agriculture,exchange,demographic,interest,fiscal,tax,bop`
  );
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

// Screen Three APIs...
export const getBalanceSheetData = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getIncomeStatementData = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getCashflowData = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getCompanyOverviewData = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getBalanceSheetDataAnnually = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getBalanceSheetDataQuaterly = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getIncomeStatementDataAnnually = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getIncomeStatementDataQuaterly = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getCashflowDataAnnually = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

export const getCashflowDataQuaterly = (companyName_) => {
  let companyName = "INFY";
  return wrappedGet(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
};

// export const getRatios = (companyName_) => {
//   let companyName = "INFY";
//   return wrappedGet(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${companyName}&apikey=BD91EULSR9NXF129`);
// };
