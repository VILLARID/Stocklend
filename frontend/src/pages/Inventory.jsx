import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import InventoryTable from "../components/Inventory/InventoryTable";
import CreateModal from "../components/Inventory/CreateModal";

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
            <div className="flex flex-col items-start h-full gap-4 bg-[#f9fafb]">

                {/* HEADER (igual al tuyo) */}
                <div className="flex w-full justify-between">

                    <div className="flex flex-col">
                        <h1 className="font-semibold text-3xl">
                            Inventario
                        </h1>

                        <p className="text-gray-400">
                            Gestiona los artículos
                        </p>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 bg-emerald-500 text-white rounded-2xl px-5 py-2 hover:scale-105 duration-150"
                    >
                        <Plus size={18} />
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