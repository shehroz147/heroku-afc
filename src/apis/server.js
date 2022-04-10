import axios from "axios";

export const baseUrl = "https://pera-backend.herokuapp.com";

export default axios.create({
  baseURL: baseUrl,
});
