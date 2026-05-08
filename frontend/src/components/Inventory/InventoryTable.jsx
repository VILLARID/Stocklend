import { useState } from "react";
import { Plus, Pen, Trash } from "lucide-react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

function InventoryTable() {

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const actionButtons = "flex justify-center items-center w-9 h-9 hover:bg-gray-200 rounded-lg duration-300"
    const headTableStyles = "px-6 py-5 font-medium text-gray-500 text-sm"
    const bodyTableStyles = "px-6 py-5 font-normal text-sm"

    const items = [
        {
            id: 1,
            name: "Platos de cerámica",
            category: "Cocina",
            stock: 24
        },
        {
            id: 2,
            name: "Batidora",
            category: "Electrodomésticos",
            stock: 8
        },
        {
            id: 3,
            name: "Sartenes",
            category: "Cocina",
            stock: 2
        },
        {
            id: 4,
            name: "Licuadora",
            category: "Electrodomésticos",
            stock: 5
        },
        {
            id: 5,
            name: "Tenedores de acero",
            category: "Cubertería",
            stock: 40
        },
        {
            id: 6,
            name: "Microondas",
            category: "Electrodomésticos",
            stock: 5
        },
    ];

    return (
        <>
            <div>
                <table className="w-full text-left border-collapse shadow-md border border-gray-500 rounded-lg overflow-hidden">

                    {/* Header */}
                    <thead className="bg-gray-100">
                        <tr className="border-b border-gray-200">

                            <th className={headTableStyles}>NOMBRE</th>
                            <th className={headTableStyles}>CATEGORÍA</th>
                            <th className={headTableStyles}>CANTIDAD</th>
                            <th className={`${headTableStyles} text-right`}>ACCIONES</th>

                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {items.map(item => (
                            <tr
                                key={item.id}
                                className="border-b border-gray-200 hover:bg-gray-100 duration-300"
                            >

                                <td className={bodyTableStyles}>
                                    {item.name}
                                </td>

                                <td className={bodyTableStyles}>
                                    <span className="bg-gray-200 px-2 py-1 rounded-lg text-gray-500">
                                        {item.category}
                                    </span>
                                </td>

                                <td className={bodyTableStyles}>
                                    {item.stock}
                                </td>

                                <td className="px-6 py-5">
                                    <div className="flex justify-end gap-2">

                                        {/* EDIT */}
                                        <button
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setIsEditOpen(true);
                                            }}
                                            className={`${actionButtons} hover:bg-green-100 hover:text-green-600`}
                                        >
                                            <Pen className="w-4 h-4 " />
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setIsDeleteOpen(true);
                                            }}
                                            className={`${actionButtons} hover:bg-red-100 hover:text-red-600`}
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

            {/* EDIT MODAL */}
            <EditModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                item={selectedItem}
            />

            {/* DELETE MODAL */}
            <DeleteModal
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                item={selectedItem}
            />
        </>
    )
}

export default InventoryTable;