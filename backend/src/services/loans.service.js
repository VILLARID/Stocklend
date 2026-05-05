const pool = require("../config/db");

// CREATE LOAN 
const createLoan = async ({ item_type_id, borrower_id, admin_id, quantity }) => {
    let conn;

    try {
        conn = await pool.getConnection();
        await conn.beginTransaction();

        // 1. verificar item + stock
        const items = await conn.query(
            "SELECT available_quantity FROM item_types WHERE id = ?",
            [item_type_id]
        );

        if (!items.length) {
            throw new Error("ITEM_NOT_FOUND");
        }

        const available = items[0].available_quantity;

        if (quantity > available) {
            throw new Error("INSUFFICIENT_STOCK");
        }

        // 2. descontar stock
        await conn.query(
            "UPDATE item_types SET available_quantity = available_quantity - ? WHERE id = ?",
            [quantity, item_type_id]
        );

        // 3. crear loan
        const result = await conn.query(`
            INSERT INTO loans (
                item_type_id,
                borrower_id,
                admin_id,
                quantity,
                loan_date
            ) VALUES (?, ?, ?, ?, NOW())
        `, [
            item_type_id,
            borrower_id,
            admin_id,
            quantity
        ]);

        await conn.commit();

        return result;

    } catch (error) {
        if (conn) await conn.rollback();
        console.error("Transaction error:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

const returnLoan = async (loanId) => {
    let conn;

    try {
        conn = await pool.getConnection();
        await conn.beginTransaction();

        // 1. obtener loan
        const loans = await conn.query(
            "SELECT item_type_id, quantity, return_date FROM loans WHERE id = ?",
            [loanId]
        );

        if (!loans.length) {
            throw new Error("LOAN_NOT_FOUND");
        }

        const loan = loans[0];

        if (loan.return_date) {
            throw new Error("LOAN_ALREADY_RETURNED");
        }

        // 2. devolver stock
        await conn.query(
            "UPDATE item_types SET available_quantity = available_quantity + ? WHERE id = ?",
            [loan.quantity, loan.item_type_id]
        );

        // 3. marcar devolución
        await conn.query(
            "UPDATE loans SET return_date = NOW() WHERE id = ?",
            [loanId]
        );

        await conn.commit();

        return true;

    } catch (error) {
        if (conn) await conn.rollback();
        console.error("Return transaction error:", error);
        throw error;

    } finally {
        if (conn) conn.release();
    }
};

module.exports = {
    createLoan,
    returnLoan,
};