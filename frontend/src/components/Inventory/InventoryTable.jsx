function InventoryTable() {

    const items = [
        {
            id: 1,
            name: "Platos de cerámica",
            category: "Cocina",
            stock: 24
        },
        {
            id: 2,
            name: "Vasos de vidrio",
            category: "Cocina",
            stock: 8
        },
        {
            id: 3,
            name: "Sartenes",
            category: "Cocina",
            stock: 2
        }
    ]

    return (
        <div className="w-full bg-white shadow-lg rounded-2xl overflow-hidden">

            <div className="w-full overflow-x-auto">

                <table className="w-full table-fixed text-left">

                    {/* Header */}
                    <thead className="bg-gray-100 text-gray-600 text-sm">
                        <tr>
                            <th className="px-6 py-4 w-2/5">Artículo</th>
                            <th className="px-6 py-4 w-1/5">Categoría</th>
                            <th className="px-6 py-4 w-1/5">Stock</th>
                            <th className="px-6 py-4 w-1/5">Acciones</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="text-gray-700">

                        {items.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {item.name}
                                </td>

                                <td className="px-6 py-4">
                                    {item.category}
                                </td>

                                <td className="px-6 py-4 font-medium">
                                    {item.stock}
                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex gap-4">

                                        <button className="text-blue-500 hover:underline">
                                            Editar
                                        </button>

                                        <button className="text-red-500 hover:underline">
                                            Eliminar
                                        </button>

                                    </div>

                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default InventoryTable;