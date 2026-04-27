const dashboardService = require("../services/dashboard.service");

const getSummary = async (req, res) => {
    try {
        const data = await dashboardService.getSummary();

        res.json({
            success: true,
            data,
        });

    } catch (error) {
        console.error("Controller error:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching dashboard summary",
        });
    }
};

module.exports = {
    getSummary,
};