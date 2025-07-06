import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "api/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;


export const getContacts = (userId) =>
  api.get(`/users/${userId}/contacts`);

export const getMessages = (senderId, receiverId) =>
  api.get(`/messages/conversation`, { params: { senderId, receiverId } });

export const sendMessage = (data) =>
  api.post(`/messages/send`, data);