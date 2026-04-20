const borrowersService = require("../services/borrowers.service");

// GET
const getAllBorrowers = async (req, res) => {
    try {
        const borrowers = await borrowersService.getAllBorrowers();

        res.json({
            success: true,
            count: borrowers.length,
            data: borrowers,
        });

    } catch (error) {
        console.error("Error fetching borrowers:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching borrowers",
        });
    }
};

// POST
const createBorrower = async (req, res) => {
    try {
        const { first_name, last_name, dni } = req.body;

        if (!first_name || !last_name || !dni) {
            return res.status(400).json({
                success: false,
                message: "first_name, last_name and dni are required",
            });
        }

        const result = await borrowersService.createBorrower({
            first_name,
            last_name,
            dni,
        });

        res.status(201).json({
            success: true,
            message: "Borrower created successfully",
            insertedId: result.insertId ? result.insertId.toString() : null,
        });

    } catch (error) {
        console.error("Controller error:", error);

        if (error.code === "ER_DUP_ENTRY") {
            return res.status(400).json({
                success: false,
                message: "DNI already exists",
            });
        }

        res.status(500).json({
            success: false,
            message: "Error creating borrower",
        });
    }
};

module.exports = {
    getAllBorrowers,
    createBorrower,
};