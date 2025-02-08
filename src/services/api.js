import axios from "axios";

const API_BASE_URL = "https://cms-headless-production.up.railway.app/api";

export const getPages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pages`);
    return response.data.data; // Return only the data array
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
};

export const getPageBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pages/${slug}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};


export const getMedia = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media`);
    return response.data.data; // Return the media array from the response
  } catch (error) {
    console.error("Error fetching media:", error);
    return [];
  }
};


export const getTeam = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/teams`);
    return response.data.data; // Return only the data array
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
};
