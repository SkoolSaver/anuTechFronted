import axiosInstance from "./axios";

export const getInTouch = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/skoolsaver/insertUserDetails",
      payload
    );
    if (response.status === 200) {
      return {
        data: response.data.data,
        error: null,
      };
    }
  } catch (error) {
    return {
      error: error,
    };
  }
};

export const applyJob = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/skoolsaver/upsertCandidateDetails",
      payload
    );
    if (response.status === 200) {
      return {
        data: response.data.data,
        error: null,
      };
    }
  } catch (error) {
    return {
      error: error,
    };
  }
};

export const getAQuote = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/skoolsaver/insertQuotation",
      payload
    );
    if (response.status === 200) {
      return {
        data: response.data.data,
        error: null,
      };
    }
  } catch (error) {
    return {
      error: error,
    };
  }
};
