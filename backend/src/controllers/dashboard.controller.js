import dashboardService from "../services/dashboard.service.js";

export const getDashboardStats = async (req, res) => {
    try {
        const data = await dashboardService.getSummary();

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error("Dashboard summary error:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching dashboard summary"
        });
    }
};

export const getRecentActivity = async (req, res) => {
    try {
        const data = await dashboardService.getRecentActivity();

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error("Dashboard activity error:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching recent activity"
        });
    }
};