import pool from "../config/db.js";

export default {

    getAll: async () => {

        const conn = await pool.getConnection();

        try {

            // 🔹 préstamos principales
            const loans = await conn.query(`
                SELECT
                    l.id,
                    CONCAT(b.first_name, ' ', b.last_name) AS user,
                    b.dni,

                    l.loan_date,
                    l.return_date,

                    CASE
                        WHEN l.return_date IS NULL
                        THEN 'Pendiente'
                        ELSE 'Devuelto'
                    END AS status

                FROM loans l
                JOIN borrowers b
                    ON b.id = l.borrower_id

                ORDER BY l.loan_date DESC
            `);

            // 🔹 artículos por préstamo
            for (const loan of loans) {

                const articles = await conn.query(`
                    SELECT
                        it.name,
                        c.name AS cat,

                        CASE
                            WHEN l.return_date IS NULL
                            THEN 'Pendiente'
                            ELSE 'Devuelto'
                        END AS status

                    FROM loan_items li

                    JOIN item_types it
                        ON it.id = li.item_type_id

                    JOIN categories c
                        ON c.id = it.category_id

                    JOIN loans l
                        ON l.id = li.loan_id

                    WHERE li.loan_id = ?
                `, [loan.id]);

                loan.articles = articles;

            }

            return loans;

        } finally {
            conn.release();
        }
    },

    getById: async (id) => {

        const conn = await pool.getConnection();

        try {

            const rows = await conn.query(`
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

            const loan = rows[0];

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

            const active = await conn.query(`
                SELECT COUNT(*) AS total
                FROM loans
                WHERE return_date IS NULL
            `);

            const returnedToday = await conn.query(`
                SELECT COUNT(*) AS total
                FROM loans
                WHERE DATE(return_date) = CURDATE()
            `);

            const available = await conn.query(`
                SELECT SUM(available_quantity) AS total
                FROM item_types
            `);

            return {
                active_loans: active[0]?.total || 0,
                returned_today: returnedToday[0]?.total || 0,
                available_items: available[0]?.total || 0
            };

        } finally {
            conn.release();
        }
    },

    createLoan: async ({ name, lastname, dni, items }) => {

        const conn = await pool.getConnection();

        try {

            await conn.beginTransaction();

            // 🔹 buscar o crear borrower
            const borrower = await conn.query(
                `SELECT id FROM borrowers WHERE dni = ?`,
                [dni]
            );

            let borrowerId;

            if (borrower.length > 0) {

                borrowerId = borrower[0].id;

            } else {

                const result = await conn.query(`
                    INSERT INTO borrowers (first_name, last_name, dni)
                    VALUES (?, ?, ?)
                `, [name, lastname, dni]);

                borrowerId = result.insertId;
            }

            // 🔹 crear préstamos + items
            for (const item of items) {

                const loanResult = await conn.query(`
                    INSERT INTO loans (borrower_id, loan_date)
                    VALUES (?, NOW())
                `, [borrowerId]);

                const loanId = loanResult.insertId;

                await conn.query(`
                    INSERT INTO loan_items (loan_id, item_type_id, quantity)
                    VALUES (?, ?, ?)
                `, [loanId, item.id, item.quantity]);

                await conn.query(`
                    UPDATE item_types
                    SET available_quantity = available_quantity - ?
                    WHERE id = ?
                `, [item.quantity, item.id]);
            }

            await conn.commit();

            return { message: "Loan created" };

        } catch (error) {

            await conn.rollback();
            throw error;

        } finally {

            conn.release();

        }
    }
};