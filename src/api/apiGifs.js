import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getGifRequests = async (userData) =>  {
  return await axios
    .get(`${API_URL}/gifs/getgif`, userData)
    .catch((res) => res.response.data.msg);
};

export const createGifRequest = async (userData) => {
    return await axios
      .post(`${API_URL}/gifs/create`, userData)
      .catch((res) => res.response.data.msg);
  };

  
export const deleteGifRequest = async (id) => {
  return await axios
      .delete(`${API_URL}/gifs/delete/${id}`, id)
      .catch((res) => res.response.data.msg);
  };

export const updateGifRequest = async (data) => {
  return await axios
      .delete(`${API_URL}/gifs/edit`, data)
      .catch((res) => res.response.data.msg);
  };