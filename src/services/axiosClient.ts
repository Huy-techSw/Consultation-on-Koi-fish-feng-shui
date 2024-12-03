import axios, { AxiosError } from "axios";
// import { isEmpty } from "lodash";

const axiosClient = axios.create({
  baseURL: "https://localhost:7042/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("jwtToken");
    // Do something before request is sent
    if (token !== undefined) {
      // console.log("Token: ", token);
      if (config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      } else {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<{ content: string }>) => {
    return error.response?.data;
  }
);

export default axiosClient;
