function EditModal({ isOpen, onClose, item }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-105 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">

                    <h2 className="text-xl font-semibold text-gray-800">
                        Editar artículo
                    </h2>

                    <button
                        onClick={onClose}
                        className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-black duration-200"
                    >
                        ✕
                    </button>

                </div>

                {/* Body */}
                <form className="flex flex-col gap-5 p-6">

                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Nombre
                        </label>

                        <input
                            type="text"
                            defaultValue={item?.name}
                            className="border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Categoría
                        </label>

                        <input
                            type="text"
                            defaultValue={item?.category}
                            className="border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Cantidad
                        </label>

                        <input
                            type="number"
                            defaultValue={item?.stock}
                            className="border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-1/2 px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 duration-200"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="w-1/2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 duration-200"
                        >
                            Guardar cambios
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditModal;