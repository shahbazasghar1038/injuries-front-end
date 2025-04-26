import axiosInstance from "./axios";

export const loginUser = async (payload) => {
  console.log("payload : ", payload);
  try {
    const response = await axiosInstance.post("users/login", payload);
    console.log(response);

    return response.data;
  } catch (error) {
    throw new Error(error || "An error occurred");
  }
};

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post("users/create", payload);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Registration failed");
  }
};

export const verifyOtp = async (payload) => {
  try {
    const response = await axiosInstance.post("users/verify-user", payload);
    console.log("response : ", response);

    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || "OTP verification failed"
    );
  }
};

export const resendOtp = async (payload) => {
  try {
    const response = await axiosInstance.post("users/resend-otp", payload);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Resend OTP failed");
  }
};

export const updatePassword = async (payload) => {
  try {
    const response = await axiosInstance.put("users/update-password", payload);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Password updated failed");
  }
};
