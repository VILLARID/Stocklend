import pool from "../config/db.js";

export default {

    getAll: async () => {
        const conn = await pool.getConnection();

        try {

            const [loans] = await conn.query(`
            SELECT 
                l.id,
                CONCAT(b.first_name, ' ', b.last_name) AS user,
                b.dni,

                it.name AS article,

                l.quantity AS articles,

                l.loan_date AS date,
                l.return_date,

                CASE
                    WHEN l.return_date IS NULL
                    THEN 'Pendiente'
                    ELSE 'Devuelto'
                END AS status

            FROM loans l

            JOIN borrowers b
                ON b.id = l.borrower_id

            JOIN item_types it
                ON it.id = l.item_type_id

            ORDER BY l.loan_date DESC
        `);

            return loans;

        } finally {
            conn.release();
        }
    },

    getById: async (id) => {
        const conn = await pool.getConnection();

        try {
            const [loan] = await conn.query(`
                SELECT 
                    l.id,
                    l.loan_date,
                    l.return_date,
                    CONCAT(b.first_name, ' ', b.last_name) AS user,
                    b.dni
                FROM loans l
                JOIN borrowers b ON b.id = l.borrower_id
                WHERE l.id = ?
            `, [id]);

            if (!loan) return null;

            const items = await conn.query(`
                SELECT 
                    li.quantity,
                    it.name AS item_name,
                    c.name AS category
                FROM loan_items li
                JOIN item_types it ON it.id = li.item_type_id
                JOIN categories c ON c.id = it.category_id
                WHERE li.loan_id = ?
            `, [id]);

            return {
                ...loan,
                items
            };

        } finally {
            conn.release();
        }
    },

    getStats: async () => {
        const conn = await pool.getConnection();

        try {
            const [active] = await conn.query(`
                SELECT COUNT(*) AS total
                FROM loans
                WHERE return_date IS NULL
            `);

            const [returnedToday] = await conn.query(`
                SELECT COUNT(*) AS total
                FROM loans
                WHERE DATE(return_date) = CURDATE()
            `);

            const [available] = await conn.query(`
                SELECT SUM(available_quantity) AS total
                FROM item_types
            `);

            return {
                active_loans: Number(active.total || 0),
                returned_today: Number(returnedToday.total || 0),
                available_items: Number(available.total || 0)
            };

        } finally {
            conn.release();
        }
    },

    createLoan: async ({ name, lastname, dni, items }) => {
        const conn = await pool.getConnection();

        try {
            await conn.beginTransaction();

            let borrower = await conn.query(
                `SELECT id FROM borrowers WHERE dni = ?`,
                [dni]
            );

            let borrowerId;

            if (borrower.length > 0) {
                borrowerId = borrower[0].id;
            } else {
                const result = await conn.query(
                    `INSERT INTO borrowers (first_name, last_name, dni)
                 VALUES (?, ?, ?)`,
                    [name, lastname, dni]
                );

                borrowerId = result.insertId;
            }

            // 🔥 AQUÍ ESTABA EL ERROR EN TU CASO
            for (const item of items) {

                await conn.query(
                    `INSERT INTO loans (item_type_id, borrower_id, admin_id, quantity, loan_date)
                 VALUES (?, ?, ?, ?, NOW())`,
                    [item.id, borrowerId, 1, item.quantity]
                );

                await conn.query(
                    `UPDATE item_types
                 SET available_quantity = available_quantity - ?
                 WHERE id = ?`,
                    [item.quantity, item.id]
                );
            }

            await conn.commit();
            conn.release();

            return { message: "Loan created" };

        } catch (error) {
            await conn.rollback();
            conn.release();
            throw error;
        }
    }
};