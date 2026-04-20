const pool = require("../config/db");

// GET ALL
const getAllBorrowers = async () => {
    let conn;

    try {
        conn = await pool.getConnection();

        const rows = await conn.query(`
            SELECT 
                id,
                first_name,
                last_name,
                dni,
                created_at,
                updated_at
            FROM borrowers
            ORDER BY id DESC
        `);

        return rows || [];

    } catch (error) {
        console.error("Error GET borrowers:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

// CREATE
const createBorrower = async ({ first_name, last_name, dni }) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const result = await conn.query(`
            INSERT INTO borrowers (
                first_name,
                last_name,
                dni
            ) VALUES (?, ?, ?)
        `, [
            first_name,
            last_name,
            dni
        ]);

        return result;

    } catch (error) {
        console.error("Error CREATE borrower:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    getAllBorrowers,
    createBorrower,
};