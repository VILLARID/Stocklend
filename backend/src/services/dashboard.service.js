import pool from "../config/db.js";

export default {

    getSummary: async () => {
        const conn = await pool.getConnection();

        const [totalItems] = await conn.query(
            "SELECT COUNT(*) as total FROM item_types"
        );

        const [availableItems] = await conn.query(
            "SELECT SUM(available_quantity) as total FROM item_types"
        );

        const [borrowedItems] = await conn.query(`
        SELECT SUM(quantity) as total
        FROM loans
        WHERE return_date IS NULL
    `);

        const [notReturned] = await conn.query(`
        SELECT COUNT(*) as total
        FROM loans
        WHERE return_date IS NULL
    `);

        conn.release();

        return {
            total_items: Number(totalItems.total || 0),
            available_items: Number(availableItems.total || 0),
            borrowed_items: Number(borrowedItems.total || 0),
            not_returned_items: Number(notReturned.total || 0)
        };
    },

    getRecentActivity: async () => {
        const conn = await pool.getConnection();

        const rows = await conn.query(`
            SELECT
                l.id,
                l.loan_date,
                l.return_date,
                b.first_name AS user,
                i.name AS product
            FROM loans l
            JOIN borrowers b ON l.borrower_id = b.id
            JOIN item_types i ON l.item_type_id = i.id
            ORDER BY l.loan_date DESC
            LIMIT 10
        `);

        conn.release();

        return rows.map(r => ({
            type: r.return_date ? "return" : "loan",
            message: r.return_date
                ? "Devolución de artículo"
                : "Préstamo de artículo",
            user: r.user,
            product: r.product,
            time: 1
        }));
    }
};