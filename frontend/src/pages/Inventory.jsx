import { useState } from "react";
import { Plus } from "lucide-react";

import InventoryTable from "../components/Inventory/InventoryTable";
import CreateModal from "../components/Inventory/CreateModal";

function Inventory() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col items-start h-full gap-4 bg-[#f9fafb]">

                {/* Header */}
                <div className="flex w-full justify-between">

                    <div className="flex flex-col">
                        <h1 className="font-semibold text-3xl">
                            Inventario
                        </h1>

                        <p className="text-gray-400">
                            Gestiona los artículos de cocina
                        </p>
                    </div>

                    <div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 bg-[#10b981] text-white rounded-2xl px-5 py-2 cursor-pointer hover:scale-105 hover:bg-[#059769] duration-150"
                        >
                            <Plus size={18} />

                            Nuevo artículo
                        </button>

                    </div>

                </div>

                {/* Table */}
                <div className="w-full">
                    <InventoryTable />
                </div>

            </div>

            {/* Modal */}
            <CreateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default Inventory;