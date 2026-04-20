const loansService = require("../services/loans.service");

// CREATE
const createLoan = async (req, res) => {
    try {
        const { item_type_id, borrower_id, admin_id, quantity } = req.body;

        if (!item_type_id || !borrower_id || !admin_id || !quantity) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (quantity <= 0) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be greater than 0",
            });
        }

        const result = await loansService.createLoan({
            item_type_id,
            borrower_id,
            admin_id,
            quantity,
        });

        return res.status(201).json({
            success: true,
            message: "Loan created successfully",
            insertedId: result.insertId ? result.insertId.toString() : null,
        });

    } catch (error) {
        console.error("Controller error:", error);

        if (error.message === "ITEM_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Item not found",
            });
        }

        if (error.message === "INSUFFICIENT_STOCK") {
            return res.status(400).json({
                success: false,
                message: "Not enough stock available",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Error creating loan",
        });
    }
};

// RETURN
const returnLoan = async (req, res) => {
    try {
        const { id } = req.params;

        await loansService.returnLoan(id);

        return res.json({
            success: true,
            message: "Loan returned successfully",
        });

    } catch (error) {
        console.error("Controller error:", error);

        if (error.message === "LOAN_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Loan not found",
            });
        }

        if (error.message === "LOAN_ALREADY_RETURNED") {
            return res.status(400).json({
                success: false,
                message: "Loan already returned",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Error returning loan",
        });
    }
};

module.exports = {
    createLoan,
    returnLoan,
};