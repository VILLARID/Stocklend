import api from "./axios";

export const getItems = async () => {
    const res = await api.get("/inventory");
    return res.data;
};

export const createItem = async (data) => {
    const res = await api.post("/inventory", data);
    return res.data;
};

export const updateItem = async (id, data) => {
    const res = await api.put(`/inventory/${id}`, data);
    return res.data;
};

export const deleteItem = async (id) => {
    const res = await api.delete(`/inventory/${id}`);
    return res.data;
};