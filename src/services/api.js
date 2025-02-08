import axios from "axios";

// Define the API base URL
const API_BASE_URL = "https://cms-headless-production.up.railway.app/api";

// Create the axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch pages using the axios instance
export const getPages = async () => {
  try {
    // Use the axios instance to get the data
    const response = await api.get("/pages");
    return response.data.data; // Return only the 'data' array from the response
  } catch (error) {
    console.error("Error fetching pages:", error);
    return []; // Return an empty array in case of error
  }
};

export const getPageBySlug = async (slug) => {
  try {
    const response = await api.get(`/pages/${slug}`);
    return response.data.data; // Return only the 'data' array from the response
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};


export const getMedia = async () => {
  try {
    const response = await api.get("/meida");
    return response.data.data; // Return only the 'data' array from the response
  } catch (error) {
    console.error("Error fetching media:", error);
    return [];
  }
};


export const getTeam = async () => {
  try {
    const response = await api.get("/teams");
    return response.data.data; // Return only the 'data' array from the response
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
};
