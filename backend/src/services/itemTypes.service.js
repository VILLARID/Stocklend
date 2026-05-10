const pool = require("../config/db");

// GET ALL
const getAll = async () => {
    let conn;

    try {
        conn = await pool.getConnection();

        const rows = await conn.query(`
            SELECT 
                it.id,
                it.name,
                it.description,
                it.total_quantity,
                it.available_quantity,
                c.name AS category
            FROM item_types it
            JOIN categories c ON it.category_id = c.id
            ORDER BY it.id DESC
        `);

        return rows;

    } finally {
        if (conn) conn.release();
    }
};

// CREATE
const create = async (data) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const result = await conn.query(`
            INSERT INTO item_types (name, description, category_id, total_quantity, available_quantity)
            VALUES (?, ?, ?, ?, ?)
        `, [
            data.name,
            data.description,
            data.category_id,
            data.total_quantity,
            data.available_quantity
        ]);

        return result;

    } finally {
        if (conn) conn.release();
    }
};

// UPDATE
const update = async (id, data) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const result = await conn.query(`
            UPDATE item_types
            SET name = ?, description = ?, category_id = ?, total_quantity = ?, available_quantity = ?
            WHERE id = ?
        `, [
            data.name,
            data.description,
            data.category_id,
            data.total_quantity,
            data.available_quantity,
            id
        ]);

        return result;

    } finally {
        if (conn) conn.release();
    }
};

// DELETE
const remove = async (id) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const result = await conn.query(`
            DELETE FROM item_types WHERE id = ?
        `, [id]);

        return result;

    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    getAll,
    create,
    update,
    remove
};