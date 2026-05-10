const pool = require("../config/db");

const getAllItems = async () => {
    let conn;

    try {
        conn = await pool.getConnection();

        const rows = await conn.query(`
            SELECT 
                id,
                name,
                total_quantity,
                available_quantity,
                (total_quantity - available_quantity) AS borrowed_quantity
            FROM item_types
            ORDER BY name ASC
        `);

        return rows;

    } catch (error) {
        console.error("Inventory service error:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    getAllItems,
};