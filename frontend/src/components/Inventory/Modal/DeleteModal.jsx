import { useState } from "react";
import { deleteItem } from "../../../api/inventory";

function DeleteModal({ isOpen, onClose, item, refresh }) {
    const [loading, setLoading] = useState(false);

    if (!isOpen || !item) return null;

    const handleDelete = async () => {
        setLoading(true);

        try {
            await deleteItem(item.id);
            refresh?.();
            onClose();
        } catch (err) {
            console.error("Delete item error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="px-6 py-5 bg-linear-to-r from-red-50 to-white border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Eliminar artículo
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Esta acción no se puede deshacer
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                        <p className="text-sm text-gray-700">
                            Estás a punto de eliminar el siguiente artículo:
                        </p>
                        <p className="mt-2 text-sm font-semibold text-gray-900">
                            {item?.name}
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">
                        Si lo eliminas, toda la información asociada se perderá permanentemente.
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="w-1/2 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                        >
                            Cancelar
                        </button>

                        <button
                            onClick={handleDelete}
                            disabled={loading}
                            className="w-1/2 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 transition shadow-sm"
                        >
                            {loading ? "Eliminando..." : "Eliminar"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;