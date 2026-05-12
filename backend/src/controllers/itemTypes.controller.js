import itemTypesService from "../services/itemTypes.service.js";

const getAll = async (req, res) => {
    try {
        const data = await itemTypesService.getAll();

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error("GetAll error:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching items"
        });
    }
};

const getAvailable = async (req, res) => {
    try {
        const data = await itemTypesService.getAvailable();

        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error("GetAvailable error:", error);

        res.status(500).json({
            success: false,
            message: "Error fetching available items"
        });
    }
};

const create = async (req, res) => {
    try {
        const result = await itemTypesService.create(req.body);

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error("Create error:", error);

        res.status(500).json({
            success: false,
            message: "Error creating item"
        });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await itemTypesService.update(id, req.body);

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error("Update error:", error);

        res.status(500).json({
            success: false,
            message: "Error updating item"
        });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await itemTypesService.remove(id);

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error("Delete error:", error);

        res.status(500).json({
            success: false,
            message: "Error deleting item"
        });
    }
};

export default {
    getAll,
    getAvailable,
    create,
    update,
    remove
};