import axiosInstance from "./axios";

export const createCase = async (payload) => {
  console.log("payload : ", payload);
  try {
    const response = await axiosInstance.post("cases/create", payload);
    console.log(response);

    return response.data;
  } catch (error) {
    throw new Error(error || "An error occurred");
  }
};

export const getAllCases = async (id) => {
  try {
    const response = await axiosInstance.get(`cases/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "fetching cases failed");
  }
};


