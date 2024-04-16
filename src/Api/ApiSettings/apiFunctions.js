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

export async function wrappedFetch(url, method, data, headers, configs) {
  const config = {
    url,
    method,
    data,
    ...configs,
  };
  if (headers) config.headers = headers;
  try {
    return await instance(config);
  } catch (error) {
    const err = error;
    return {
      status: err.response === undefined ? false : err.response.status,
      err,
    };
  }
}
