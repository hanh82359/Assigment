import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
// axiosClient.interceptors.response.use(res => res.data ? res.data : null);

export default axiosClient;
