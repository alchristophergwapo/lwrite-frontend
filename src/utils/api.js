import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/";

const callApi = async (method, route, data = null) => {
  let headers = {
    "Access-Control-Allow-Origin": "*",
  };

  let url = `${baseUrl}${route}`;

  let config = {
    timeout: 1000 * 120,
    method,
    headers,
    url,
    crossDomain: true,
    data,
  };

  try {
    let response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  post: async ({ route, data = null }) => callApi("post", route, data),
  put: async ({ route, data = null }) => callApi("put", route, data),
  delete: async ({ route, data = null }) => callApi("delete", route, data),
  get: async ({ route }) => callApi("get", route, null),
};
