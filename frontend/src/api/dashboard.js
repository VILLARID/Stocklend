import api from "./axios";

// Dashboard stats
export const getDashboardStats = async () => {
    const res = await api.get("/dashboard");
    return res.data;
};

// Activity
export const getRecentActivity = async () => {
    const res = await api.get("/dashboard/activity");
    return res.data;
};