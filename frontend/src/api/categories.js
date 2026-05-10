import axios from "axios";

const API = "http://localhost:3000";

export const getCategories = async () => {
    const res = await axios.get(`${API}/categories`);
    return res.data;
};