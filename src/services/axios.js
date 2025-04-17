import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/", // Replace with your API URL
  // baseURL: "https://your-api-url.com", // Replace with your API URL
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
