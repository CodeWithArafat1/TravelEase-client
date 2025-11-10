import axios from "axios";
import { memo, useEffect } from "react";
// === just created no use ===
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

const useAxiosSecure = () => {
  useEffect(() => {
    // add token in the request headers
    const requestInterceptor = instance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "userToken"
      )}`;
      return config;
    });

    // response interceptor
    const responseInterceptor = instance.interceptors.response(
      (res) => {
        return res;
      },
      (err) => {
        if (err) {
          // user logged out
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return instance;
};

export default memo(useAxiosSecure);
