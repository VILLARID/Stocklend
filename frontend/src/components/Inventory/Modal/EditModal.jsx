import { useEffect, useState } from "react";
import { updateItem } from "../../../api/inventory";

function EditModal({ isOpen, onClose, item, refresh, categories = [] }) {
    const [form, setForm] = useState({
        name: "",
        category_id: "",
        total_quantity: 0
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (item) {
            setForm({
                name: item.name || "",
                category_id: item.category_id ? Number(item.category_id) : "",
                total_quantity: item.total_quantity ?? 0
            });
        }
    }, [item]);

    if (!isOpen || !item) return null;

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateItem(item.id, form);
            refresh?.();
            onClose();
        } catch (err) {
            console.error("Update item error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="px-6 py-5 bg-gradient-to-r from-emerald-50 to-white border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Editar artículo
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Actualiza la información del item
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleUpdate} className="p-6 space-y-5">

                    {/* Nombre */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input
                            value={form.name}
                            className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition"
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />
                    </div>

                    {/* Categoría */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Categoría
                        </label>
                        <select
                            value={form.category_id}
                            className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    category_id: Number(e.target.value)
                                })
                            }
                        >
                            <option value="">Selecciona categoría</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Cantidad */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Cantidad total
                        </label>
                        <input
                            type="number"
                            min={0}
                            value={form.total_quantity}
                            className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    total_quantity: Number(e.target.value)
                                })
                            }
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-1/2 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-1/2 py-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-50 transition shadow-sm"
                        >
                            {loading ? "Guardando..." : "Guardar"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditModal;