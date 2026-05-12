import loansService from "../services/loans.service.js";

export const getLoans = async (req, res) => {
    try {
        const data = await loansService.getAll();

        res.json(data);

    } catch (error) {
        console.error("Get loans error:", error);

        res.status(500).json({
            message: "Error fetching loans"
        });
    }
};

export const getLoanById = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await loansService.getById(id);

        if (!data) {
            return res.status(404).json({
                message: "Loan not found"
            });
        }

        res.json(data);

    } catch (error) {
        console.error("Get loan by id error:", error);

        res.status(500).json({
            message: "Error fetching loan"
        });
    }
};

export const getLoansStats = async (req, res) => {
    try {
        const data = await loansService.getStats();

        res.json({
            success: true,
            data
        });

    } catch (error) {
        console.error("Loans stats error:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching loans stats"
        });
    }
};

export const createLoan = async (req, res) => {
    try {
        const { name, lastname, dni, items } = req.body;

        const result = await loansService.createLoan({
            name,
            lastname,
            dni,
            items
        });

        res.json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error creating loan"
        });
    }
};