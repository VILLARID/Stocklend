import pool from "../config/db.js";

export const getCategories = async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const rows = await conn.query("SELECT * FROM categories");

        conn.release();

        res.json({
            success: true,
            data: rows
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error fetching categories"
        });
    }
};