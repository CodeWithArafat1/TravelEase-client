import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/api/",
  baseURL: "https://assignment-10-server-travelease.vercel.app/api",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
