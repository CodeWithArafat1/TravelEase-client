import axios from "axios";

const instance = axios.create({
  baseURL: "https://assignment-10-server-teal-zeta.vercel.app/api",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
