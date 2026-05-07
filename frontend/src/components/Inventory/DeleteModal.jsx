import { TriangleAlert } from "lucide-react";

function DeleteModal({ isOpen, onClose, item }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-105 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">

                    <TriangleAlert className="text-red-500 w-5 h-5" />

                    <h2 className="text-xl font-semibold text-gray-800">
                        Eliminar artículo
                    </h2>

                </div>

                {/* Body */}
                <div className="p-6">

                    <p className="text-gray-700 text-sm">
                        ¿Estás seguro de que deseas eliminar{" "}
                        <span className="font-semibold">
                            {item?.name}
                        </span>
                        ? Esta acción no se puede deshacer.
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3 pt-6">

                        <button
                            onClick={onClose}
                            className="flex-1 px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 duration-200"
                        >
                            Cancelar
                        </button>

                        <button
                            className="flex-1 px-5 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 duration-200"
                        >
                            Eliminar
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DeleteModal;