import axios from "axios";
const BASE_URL = import.meta.env.REACT_APP_BASE_URL || "https://your-backend-api.com/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your API URL
  // baseURL: "https://your-api-url.com", // Replace with your API URL
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
