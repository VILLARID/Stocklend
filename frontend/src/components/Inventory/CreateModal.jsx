function CreateModal({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl">

                <div className="flex justify-between items-center mb-5">

                    <h2 className="text-xl font-semibold">
                        Crear artículo
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black"
                    >
                        ✕
                    </button>

                </div>

                <form className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Nombre del artículo"
                        className="border px-4 py-2 rounded-lg"
                    />

                    <input
                        type="text"
                        placeholder="Categoría"
                        className="border px-4 py-2 rounded-lg"
                    />

                    <input
                        type="number"
                        placeholder="Stock"
                        className="border px-4 py-2 rounded-lg"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Crear artículo
                    </button>

                </form>

            </div>

        </div>
    )
}

export default CreateModal;