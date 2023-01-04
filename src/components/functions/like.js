import axios from "axios";

// base url
const BASE_URL = "https://localhost:7178/api";

// like post
export const like = async () => 
    await axios.get(`${BASE_URL}/likes`);
