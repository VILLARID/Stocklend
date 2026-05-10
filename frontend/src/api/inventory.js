import axios from "axios";

const API = "http://localhost:3000/inventory";

export const getItems = async () => {
    const res = await axios.get(API);
    return res.data;
};

export const createItem = async (data) => {
    const res = await axios.post(API, data);
    return res.data;
};

export const updateItem = async (id, data) => {
    const res = await axios.put(`${API}/${id}`, data);
    return res.data;
};

export const deleteItem = async (id) => {
    const res = await axios.delete(`${API}/${id}`);
    return res.data;
};