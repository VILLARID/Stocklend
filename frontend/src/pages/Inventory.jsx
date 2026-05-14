import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import InventoryTable from "../components/Inventory/InventoryTable";
import CreateModal from "../components/Inventory/Modal/CreateModal";

import { getItems } from "../api/inventory";
import { getCategories } from "../api/categories";

function Inventory() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchItems = async () => {
        try {
            const res = await getItems();
            setItems(res.data);
        } catch (error) {
            console.error(error);
            setItems([]);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(res.data);
        } catch (error) {
            console.error(error);
            setCategories([]);
        }
    };

    useEffect(() => {
        fetchItems();
        fetchCategories();
    }, []);

    return (
        <>
            <div className="flex flex-col items-start h-full gap-5 bg-[#f9fafb]">

                {/* HEADER */}
                <div className="flex w-full justify-between items-center">

                    <div className="flex flex-col">
                        <h1 className="font-semibold text-3xl text-gray-800">
                            Inventario
                        </h1>

                        <p className="text-gray-400 text-sm">
                            Gestiona los artículos
                        </p>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 bg-[#10b981] text-white rounded-2xl px-5 py-2 cursor-pointer hover:scale-105 hover:bg-[#059769] duration-150"
                    >
                        <Plus size={16} />
                        Nuevo artículo
                    </button>

                </div>

                {/* TABLE */}
                <div className="w-full">
                    <InventoryTable
                        items={items}
                        refresh={fetchItems}
                        categories={categories}
                    />
                </div>

            </div>

            <CreateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                refresh={fetchItems}
            />
        </>
    );
}

export default Inventory;