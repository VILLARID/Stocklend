const itemTypesService = require("../services/itemTypes.service");

// GET
const getAllItemTypes = async (req, res) => {
    try {
        const item_types = await itemTypesService.getAllItemTypes();

        res.json({
            success: true,
            count: item_types.length,
            data: item_types,
        });

    } catch (error) {
        console.error("Error fetching item_types:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching item types",
        });
    }
};

// CREATE
const createItemType = async (req, res) => {
    try {
        const { name, description, category_id, total_quantity } = req.body;

        if (!name || !category_id || total_quantity === undefined) {
            return res.status(400).json({
                success: false,
                message: "name, category_id and total_quantity are required",
            });
        }

        if (total_quantity < 0) {
            return res.status(400).json({
                success: false,
                message: "total_quantity cannot be negative",
            });
        }

        const result = await itemTypesService.createItemType({
            name,
            description,
            category_id,
            total_quantity,
        });

        res.status(201).json({
            success: true,
            message: "Item type created successfully",
            insertedId: result.insertId ? result.insertId.toString() : null,
        });

    } catch (error) {
        console.error("Controller error:", error);

        res.status(500).json({
            success: false,
            message: "Error creating item type",
        });
    }
};

module.exports = {
    getAllItemTypes,
    createItemType,
};