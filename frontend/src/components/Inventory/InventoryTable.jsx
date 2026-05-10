import { useState } from "react";
import { Pen, Trash } from "lucide-react";

import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

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
            <div>
                <table className="w-full text-left border-collapse shadow-md border border-gray-200 rounded-lg overflow-hidden">

                    {/* HEADER */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-5 text-sm font-medium text-gray-500">NOMBRE</th>
                            <th className="px-6 py-5 text-sm font-medium text-gray-500">CATEGORÍA</th>
                            <th className="px-6 py-5 text-sm font-medium text-gray-500">TOTAL</th>
                            <th className="px-6 py-5 text-sm font-medium text-gray-500">DISPONIBLE</th>
                            <th className="px-6 py-5 text-sm font-medium text-gray-500 text-right">ACCIONES</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>
                        {safeItems.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b border-gray-300 hover:bg-gray-100 duration-150"
                            >

                                <td className="px-6 py-5">{item.name}</td>

                                <td className="px-6 py-5">
                                    <span className="bg-gray-200 px-2 py-1 rounded-lg text-gray-600 text-xs">
                                        {item.category_name || "Sin categoría"}
                                    </span>
                                </td>

                                <td className="px-6 py-5">{item.total_quantity}</td>
                                <td className="px-6 py-5">{item.available_quantity}</td>

                                <td className="px-6 py-5">
                                    <div className="flex justify-end gap-2">

                                        <button
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setIsEditOpen(true);
                                            }}
                                            className="w-9 h-9 flex items-center justify-center hover:bg-green-100 rounded-lg"
                                        >
                                            <Pen className="w-4 h-4" />
                                        </button>

                                        <button
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setIsDeleteOpen(true);
                                            }}
                                            className="w-9 h-9 flex items-center justify-center hover:bg-red-100 rounded-lg"
                                        >
                                            <Trash className="w-4 h-4" />
                                        </button>

                                    </div>
                                </td>

                            </tr>
                        ))}
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