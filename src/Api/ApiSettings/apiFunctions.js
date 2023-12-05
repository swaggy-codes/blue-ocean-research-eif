import instance from "./axiosConfig";

export const wrappedGet = async (url, method, params) => {
  let config = {
    url,
    method,
    headers: {},
    params,
  };

  try {
    return await instance(config);
  } catch (error) {
    console.log(error, "this is the error!");
    return await instance(config);
  }
};
