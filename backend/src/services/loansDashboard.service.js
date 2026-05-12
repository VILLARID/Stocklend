import pool from "../config/db.js";

export default {

    getLoansCards: async () => {
        const conn = await pool.getConnection();

        try {

            const [activeLoans] = await conn.query(`
                SELECT COUNT(*) AS total
                FROM loans
                WHERE return_date IS NULL
            `);

            const [returnedToday] = await conn.query(`
                SELECT COUNT(*) AS total
                FROM loans
                WHERE DATE(return_date) = CURDATE()
            `);

            const [availableItems] = await conn.query(`
                SELECT SUM(available_quantity) AS total
                FROM item_types
            `);

            conn.release();

            return {
                active_loans: Number(activeLoans.total || 0),
                returned_today: Number(returnedToday.total || 0),
                available_items: Number(availableItems.total || 0)
            };

        } catch (error) {
            conn.release();
            throw error;
        }
    }

};