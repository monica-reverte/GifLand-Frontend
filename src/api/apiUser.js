import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const auth0loginRequest = async (userData) => {
  return await axios
    .post(`${API_URL}/user/auth0login`, userData)
    .catch((res) => res.response.data.msg);
};