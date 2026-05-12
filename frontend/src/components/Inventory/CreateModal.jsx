import { useEffect, useState } from "react";
import { createItem } from "../../api/inventory";
import { getCategories } from "../../api/categories";

function CreateModal({ isOpen, onClose, refresh }) {
    const [form, setForm] = useState({
        name: "",
        category_id: "",
        total_quantity: 0
    });

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getCategories();
                const data = res?.data?.data || res?.data || [];
                setCategories(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Error loading categories:", err);
                setCategories([]);
            }
        };

        if (isOpen) fetchCategories();
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createItem(form);
            refresh?.();
            onClose();
            setForm({ name: "", category_id: "", total_quantity: 0 });
        } catch (err) {
            console.error("Create item error:", err);
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
                        Nuevo artículo
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Agrega un item al inventario
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Nombre */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input
                            placeholder="Ej: Laptop Dell"
                            className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition"
                            value={form.name}
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
                            className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition"
                            value={form.category_id}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    category_id: Number(e.target.value)
                                })
                            }
                        >
                            <option value="">Selecciona una categoría</option>
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
                            className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition"
                            value={form.total_quantity}
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
                            {loading ? "Creando..." : "Crear"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateModal;