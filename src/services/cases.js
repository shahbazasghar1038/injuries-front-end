import { Archive } from "lucide-react";
import axiosInstance from "./axios";

export const getAllProvider = async () => {
  try {
    const response = await axiosInstance.get(`users/providers`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "fetching cases failed");
  }
};

export const createCase = async (payload) => {
  try {
    const response = await axiosInstance.post("cases/create", payload);
    console.log(response);

    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "An error occurred");
  }
};

export const getAllCases = async (id) => {
  try {
    const response = await axiosInstance.get(`cases/allcases/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "fetching cases failed");
  }
};

export const getSingleCase = async (id) => {
  try {
    const response = await axiosInstance.get(`cases/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "fetching single cases failed");
  }
};

export const deleteSingleCase = async (id) => {
  try {
    const response = await axiosInstance.delete(`cases/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "delete case failed");
  }
};

export const addDoctorToCase = async (model) => {
  try {
    const response = await axiosInstance.post(`cases/add-provider`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "add provider to case failed");
  }
};

export const addTaskToCase = async (model) => {
  try {
    const response = await axiosInstance.post(`tasks/create`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "task create failed");
  }
};

// Archive a case
export const archiveCase = async (model) => {
  try {
    const response = await axiosInstance.put(`archive/archived`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "archiving case failed");
  }
};
