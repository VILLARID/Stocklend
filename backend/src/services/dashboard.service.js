const pool = require("../config/db");

// ===============================
// 📊 RESUMEN
// ===============================
const getSummary = async () => {
    let conn;

    try {
        conn = await pool.getConnection();

        // Items
        const items = await conn.query(`
            SELECT 
                SUM(total_quantity) AS total_items,
                SUM(available_quantity) AS available_items
            FROM item_types
        `);

        const totalItems = Number(items[0].total_items || 0);
        const availableItems = Number(items[0].available_items || 0);

        // Artículos en préstamo
        const borrowedItems = totalItems - availableItems;

        // No devueltos
        const loans = await conn.query(`
            SELECT COUNT(*) AS not_returned_items
            FROM loans
            WHERE return_date IS NULL
        `);

        const notReturnedItems = Number(loans[0].not_returned_items || 0);

        return {
            total_items: totalItems,
            available_items: availableItems,
            borrowed_items: borrowedItems,
            not_returned_items: notReturnedItems,
        };

    } catch (error) {
        console.error("Dashboard error:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

// ===============================
// 🕒 ACTIVIDAD RECIENTE
// ===============================
const getRecentActivity = async () => {
    let conn;

    try {
        conn = await pool.getConnection();

        const rows = await conn.query(`
            SELECT 
                l.id,
                l.loan_date,
                l.return_date,
                b.first_name AS user,
                it.name AS product
            FROM loans l
            JOIN borrowers b ON l.borrower_id = b.id
            JOIN item_types it ON l.item_type_id = it.id
            ORDER BY COALESCE(l.return_date, l.loan_date) DESC
            LIMIT 5
        `);

        return rows.map(row => ({
            type: row.return_date ? "return" : "loan",
            user: row.user,
            product: row.product,
            date: row.return_date || row.loan_date
        }));

    } catch (error) {
        console.error("Recent activity error:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    getSummary,
    getRecentActivity
};