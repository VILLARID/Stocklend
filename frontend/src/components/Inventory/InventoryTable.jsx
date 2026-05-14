import { useState } from "react";
import { Pen, Trash } from "lucide-react";

import EditModal from "./Modal/EditModal";
import DeleteModal from "./Modal/DeleteModal";

function InventoryTable({
    items = [],

    refresh,
    categories = []
}) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const safeItems = Array.isArray(items) ? items : [];

    return (
        <>
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                <table className="w-full text-left border-collapse">

                    {/* HEADER */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold tracking-wider text-gray-500">NOMBRE</th>
                            <th className="px-6 py-4 text-xs font-semibold tracking-wider text-gray-500">CATEGORÍA</th>
                            <th className="px-6 py-4 text-xs font-semibold tracking-wider text-gray-500">TOTAL</th>
                            <th className="px-6 py-4 text-xs font-semibold tracking-wider text-gray-500">DISPONIBLE</th>
                            <th className="px-6 py-4 text-xs font-semibold tracking-wider text-gray-500 text-right">ACCIONES</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="divide-y divide-gray-100">
                        {safeItems.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-10 text-gray-400 text-sm">
                                    No hay artículos registrados
                                </td>
                            </tr>
                        ) : (
                            safeItems.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-5 text-sm text-gray-800 font-medium">
                                        {item.name}
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-600 text-xs">
                                            {item.category_name || "Sin categoría"}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5 text-sm text-gray-700">
                                        {item.total_quantity}
                                    </td>

                                    <td className="px-6 py-5 text-sm text-gray-700">
                                        {item.available_quantity}
                                    </td>

                                    <td className="px-6 py-5">
                                        <div className="flex justify-end gap-2">

                                            {/* EDIT */}
                                            <button
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    setIsEditOpen(true);
                                                }}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-50 text-green-600 transition-transform duration-200 hover:scale-110 hover:bg-green-100"
                                            >
                                                <Pen className="w-4 h-4" />
                                            </button>

                                            {/* DELETE */}
                                            <button
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    setIsDeleteOpen(true);
                                                }}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 text-red-600 transition-transform duration-200 hover:scale-110 hover:bg-red-100"
                                            >
                                                <Trash className="w-4 h-4" />
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <EditModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                item={selectedItem}
                refresh={refresh}
                categories={categories}
            />

            <DeleteModal
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                item={selectedItem}
                refresh={refresh}
            />
        </>
    );
}

export default InventoryTable;