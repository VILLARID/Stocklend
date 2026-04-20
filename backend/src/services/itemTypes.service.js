const pool = require("../config/db");

// GET ALL
const getAllItemTypes = async () => {
    let conn;

    try {
        conn = await pool.getConnection();

        const rows = await conn.query(`
            SELECT 
                id, 
                name, 
                description, 
                total_quantity, 
                available_quantity, 
                category_id, 
                created_at, 
                updated_at 
            FROM item_types 
            ORDER BY id DESC
        `);

        return rows || [];

    } catch (error) {
        console.error("Error GET item_types:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

// CREATE
const createItemType = async ({ name, description, category_id, total_quantity }) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const result = await conn.query(`
            INSERT INTO item_types (
                name,
                description,
                category_id,
                total_quantity,
                available_quantity
            ) VALUES (?, ?, ?, ?, ?)
        `, [
            name,
            description || null,
            category_id,
            total_quantity,
            total_quantity
        ]);

        return result;

    } catch (error) {
        console.error("Error CREATE item_type:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    getAllItemTypes,
    createItemType,
};