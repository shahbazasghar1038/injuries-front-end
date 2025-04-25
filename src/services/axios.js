import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api/", // Replace with your API URL
  baseURL: "http://13.49.130.107:5000/api/", // Replace with your API URL
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
