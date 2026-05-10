import { deleteItem } from "../../api/inventory";

function DeleteModal({ isOpen, onClose, item, refresh }) {

    if (!isOpen) return null;

    const handleDelete = async () => {
        try {
            await deleteItem(item.id);
            refresh?.();
            onClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            <div className="bg-white w-[420px] rounded-2xl p-6">

                <h2 className="font-semibold text-lg mb-3">
                    Eliminar artículo
                </h2>

                <p className="text-sm text-gray-600">
                    ¿Eliminar <b>{item?.name}</b>?
                </p>

                <div className="flex gap-2 mt-5">

                    <button onClick={onClose} className="w-1/2 border p-2 rounded-xl">
                        Cancelar
                    </button>

                    <button
                        onClick={handleDelete}
                        className="w-1/2 bg-red-500 text-white p-2 rounded-xl"
                    >
                        Eliminar
                    </button>

                </div>

            </div>

        </div>
    );
}

export default DeleteModal;