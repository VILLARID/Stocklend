import loansDashboardService from "../services/loansDashboard.service.js";

export const getLoansCards = async (req, res) => {
    try {
        const data = await loansDashboardService.getLoansCards();

        res.json({
            success: true,
            data
        });

    } catch (error) {
        console.error("Loans dashboard error:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching loans dashboard data"
        });
    }
};