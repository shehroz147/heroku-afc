import axios from "axios";

// const { REACT_APP_SERVER_BASE_URL } = process.env;
// export const baseUrl = "https://afchalal.herokuapp.com/";
export const baseUrl = "http://localhost:5000";
// export const baseUrl = "http://localhost:5000";

export default axios.create({
  baseURL: baseUrl,
});
