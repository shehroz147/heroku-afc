import axios from "axios";

// const { REACT_APP_SERVER_BASE_URL } = process.env;
// export const baseUrl = "https://afchalal.herokuapp.com/";
// export const baseUrl = "https://afcbackend.herokuapp.com";
// export const baseUrl = "https://b7ff-175-107-237-244.ap.ngrok.io/";
export const baseUrl = 'https://chaudharyamir.herokuapp.com/';

export default axios.create({
    baseURL: baseUrl,
});
