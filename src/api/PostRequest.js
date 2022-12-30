import axios from "axios";
const API = axios.create({
  baseURL: "https://social-media-server-eight.vercel.app",
});
export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`posts/${id}/like`, { userId: userId });
