import axios from "axios";

const $api = axios.create({
  withCredentials: false,
  baseURL: "https://opentdb.com/api.php",
});

$api.interceptors.request.use((config) => {
  return config;
});

export default $api;
