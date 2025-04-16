import axiosInstance from "./axios";

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("users/login", payload);
    console.log(response);

    return response.data;
  } catch (error) {
    throw new Error(error || "An error occurred");
  }
};
