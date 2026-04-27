const pool = require("../config/db");

const getSummary = async () => {
    let conn;

    try {
        conn = await pool.getConnection();

        // 🔥 1. ITEMS
        const items = await conn.query(`
            SELECT 
                SUM(total_quantity) AS total_items,
                SUM(available_quantity) AS available_items
            FROM item_types
        `);

        const totalItems = Number(items[0].total_items || 0);
        const availableItems = Number(items[0].available_items || 0);

        const borrowedItems = totalItems - availableItems;

        // 🔥 2. LOANS ACTIVOS
        const loans = await conn.query(`
            SELECT COUNT(*) AS active_loans
            FROM loans
            WHERE return_date IS NULL
        `);

        const activeLoans = Number(loans[0].active_loans || 0);

        return {
            total_items: totalItems,
            available_items: availableItems,
            borrowed_items: borrowedItems,
            active_loans: activeLoans,
        };

    } catch (error) {
        console.error("Dashboard error:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    getSummary,
};