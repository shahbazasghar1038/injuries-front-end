import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/", // Replace with your API URL
  // baseURL: "http://13.49:5000/api/", // QA server
  // baseURL: "https://inj-be.easystepin.io/api/", // QA server with domiain
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
