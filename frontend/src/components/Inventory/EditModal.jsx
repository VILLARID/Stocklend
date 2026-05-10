import { updateItem } from "../../api/inventory";
import { useState, useEffect } from "react";

function EditModal({ isOpen, onClose, item, refresh, categories = [] }) {

    const [form, setForm] = useState({
        name: "",
        category_id: "",
        total_quantity: 0
    });

    useEffect(() => {
        if (item) {
            setForm({
                name: item.name || "",
                category_id: item.category_id ? Number(item.category_id) : "",
                total_quantity: item.total_quantity ?? 0
            });
        }
    }, [item]);

    if (!isOpen) return null;

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateItem(item.id, form);
            refresh?.();
            onClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            <div className="bg-white w-[420px] rounded-2xl p-6">

                <h2 className="text-lg font-semibold mb-4">
                    Editar artículo
                </h2>

                <form onSubmit={handleUpdate} className="space-y-3">

                    {/* NAME */}
                    <input
                        value={form.name}
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />

                    {/* CATEGORY */}
                    <select
                        value={form.category_id}
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                category_id: Number(e.target.value)
                            })
                        }
                    >
                        <option value="">
                            Selecciona categoría
                        </option>

                        {(Array.isArray(categories) ? categories : []).map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    {/* STOCK */}
                    <input
                        type="number"
                        value={form.total_quantity}
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                total_quantity: Number(e.target.value)
                            })
                        }
                    />

                    {/* BUTTONS */}
                    <div className="flex gap-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-1/2 border p-2 rounded-xl"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="w-1/2 bg-emerald-500 text-white p-2 rounded-xl"
                        >
                            Guardar
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EditModal;