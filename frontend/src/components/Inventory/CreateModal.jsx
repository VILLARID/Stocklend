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

                const data =
                    res?.data?.data ||
                    res?.data ||
                    [];

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

            setForm({
                name: "",
                category_id: "",
                total_quantity: 0
            });

        } catch (err) {
            console.error("Create item error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-white w-110 rounded-3xl shadow-2xl overflow-hidden">

                <div className="px-6 py-5 border-b bg-gray-50">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Nuevo artículo
                    </h2>
                    <p className="text-sm text-gray-500">
                        Agrega un item al inventario
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    <div>
                        <label className="text-sm text-gray-600">Nombre</label>
                        <input
                            placeholder="Ej: Laptop Dell"
                            className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 outline-none"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Categoría</label>

                        <select
                            className="w-full mt-1 border border-gray-200 p-3 rounded-xl bg-white focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 outline-none appearance-none"
                            value={form.category_id}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    category_id: Number(e.target.value)
                                })
                            }
                        >
                            <option value="">Selecciona una categoría</option>

                            {(Array.isArray(categories) ? categories : []).map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Cantidad total</label>
                        <input
                            type="number"
                            className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 outline-none"
                            value={form.total_quantity}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    total_quantity: Number(e.target.value)
                                })
                            }
                        />
                    </div>

                    <div className="flex gap-3 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-1/2 py-2.5 rounded-xl border text-gray-600 hover:bg-gray-100"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-1/2 py-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-50"
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