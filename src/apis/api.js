export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  REGISTER: `${API_BASE_URL}/api/members/register`,
  LOGIN: `${API_BASE_URL}/api/members/login`,
  PROFILE: (id) => `${API_BASE_URL}api/members/profile/${id}`,
  EVENT: `${API_BASE_URL}/api/events/`,
};