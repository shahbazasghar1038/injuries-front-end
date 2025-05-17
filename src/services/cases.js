import { Archive } from "lucide-react";
import axiosInstance from "./axios";

// intakes page
export const getAllIntakes = async () => {
  try {
    const response = await axiosInstance.get(`intakes/all`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Get intakes failed");
  }
};

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
export const caseUpdate = async (payload,id) => {
  try {
    const response = await axiosInstance.put(`cases/update/${id}`, payload);
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
    const response = await axiosInstance.get(`cases/lienCase/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.error || "fetching single cases failed"
    );
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
    throw new Error(
      error
    );
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

export const getTaskbyCaseId = async (id) => {
  try {
    const response = await axiosInstance.get(`tasks/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "fetching task failed");
  }
};

// Archive a case
export const archiveCase = async (model) => {
  try {
    const response = await axiosInstance.post(`archive/archived`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "archiving case failed");
  }
};

// Un-Archive a case
export const unArchiveCase = async (model, id) => {
  try {
    const response = await axiosInstance.delete(`archive/unarchive/${id}`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "archiving case failed");
  }
};

export const getAllarchiveCase = async (id) => {
  try {
    const response = await axiosInstance.get(`archive/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "archiving case failed");
  }
};

// invite doctor
export const inviteNewDoctor = async (model) => {
  try {
    const response = await axiosInstance.post(`invite/doctor`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "task create failed");
  }
};

export const updateUser = async (id, model) => {
  try {
    const response = await axiosInstance.put(`users/${id}`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Address update failed");
  }
};


export const medicalRecordRequest = async (payload,id) => {
  try {
    const response = await axiosInstance.put(`provider-treatment-records/update/${id}`, payload);
    console.log(response);

    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "An error occurred : Record request sent failed");
  }
};


// buy case /// case payment 

// invite doctor
export const casePayment = async (model) => {
  try {
    const response = await axiosInstance.post(`payment/create-payment-intent`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "task create failed");
  }
};

export const storePaymentToServer = async (model) => {
  try {
    const response = await axiosInstance.post(`payment/payment-success`, model);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "task create failed");
  }
};


// get all Lien 
export const getAllLienOffers = async (query) => {
  try {
    const response = await axiosInstance.get(`lien-offers/${query}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "archiving case failed");
  }
};