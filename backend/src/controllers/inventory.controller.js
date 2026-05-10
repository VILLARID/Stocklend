import pool from "../config/db.js";

export const getAllItems = async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const rows = await conn.query(`
            SELECT 
                item_types.id,
                item_types.name,
                item_types.category_id,
                item_types.total_quantity,
                item_types.available_quantity,
                categories.name AS category_name
            FROM item_types
            LEFT JOIN categories 
                ON item_types.category_id = categories.id
        `);

        conn.release();

        res.json({
            success: true,
            data: rows
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error fetching inventory"
        });
    }
};

export const createItem = async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const { name, category_id, total_quantity } = req.body;

        await conn.query(
            `INSERT INTO item_types (name, category_id, total_quantity, available_quantity)
             VALUES (?, ?, ?, ?)`,
            [name, category_id, total_quantity, total_quantity]
        );

        conn.release();

        res.json({
            success: true,
            message: "Item created"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error creating item"
        });
    }
};

export const updateItem = async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const { id } = req.params;
        const { name, category_id, total_quantity } = req.body;

        await conn.query(
            `UPDATE item_types
             SET name = ?, category_id = ?, total_quantity = ?
             WHERE id = ?`,
            [name, category_id, total_quantity, id]
        );

        conn.release();

        res.json({
            success: true,
            message: "Item updated"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error updating item"
        });
    }
};

export const deleteItem = async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const { id } = req.params;

        await conn.query(
            `DELETE FROM item_types WHERE id = ?`,
            [id]
        );

        conn.release();

        res.json({
            success: true,
            message: "Item deleted"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error?.sqlMessage || "Internal server error"
        });
    }
};