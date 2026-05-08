import { useState, useRef } from "react";
import ArticlesCards from "./ArticlesCards";
import LoanSelectedPanel from "./LoanSelectedPanel";

function CreateLoanStep2({ onBack, onClose }) {
  const categories = [
    "Todas",
    "Electrodomésticos",
    "Utensilios",
    "Cocción",
    "Medición"
  ];

  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const categoryRef = useRef(null);

  const scroll = (dir) => {
    if (!categoryRef.current) return;

    categoryRef.current.scrollBy({
      left: dir === "left" ? -160 : 160,
      behavior: "smooth"
    });
  };

  const items = [
    { id: 1, name: "Batidora KitchenAid", category: "Electrodomésticos", stock: 5 },
    { id: 2, name: "Juego de cuchillos Wüsthof", category: "Utensilios", stock: 8 },
    { id: 3, name: "Licuadora Vitamix", category: "Electrodomésticos", stock: 4 },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "Todas" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAdd = (item) => {
    if (selectedItems.find((i) => i.id === item.id)) return;
    setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
  };

  const handleRemove = (id) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== id));
  };

  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">

      {/* BODY */}
      <div className="flex flex-1 min-h-0 overflow-hidden gap-6">

        {/* LEFT */}
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden gap-4">

          {/* SEARCH */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar artículos..."
            className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
          />

          {/* CATEGORIES */}
          <div className="flex items-center gap-2">

            <button
              onClick={() => scroll("left")}
              className="text-gray-500 hover:text-gray-700 px-2"
            >
              ‹
            </button>

            <div
              ref={categoryRef}
              className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition ${activeCategory === cat
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="text-gray-500 hover:text-gray-700 px-2"
            >
              ›
            </button>

          </div>

          {/* TITLE */}
          <h3 className="font-semibold text-gray-800">
            Artículos disponibles
          </h3>

          {/* PRODUCTS SCROLL */}
          <div className="flex-1 overflow-y-auto pr-2 min-h-0">
            <ArticlesCards
              items={filteredItems}
              onSelect={handleAdd}
            />
          </div>

        </div>

        {/* RIGHT PANEL */}
        <LoanSelectedPanel
          selectedItems={selectedItems}
          onRemove={handleRemove}
        />

      </div>

      {/* FOOTER */}
      <div className="flex gap-3 pt-4 border-t border-gray-100 shrink-0 bg-white">

        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-200 rounded-xl text-gray-700"
        >
          Atrás
        </button>

        <button
          onClick={onClose}
          className="px-6 py-3 border border-red-200 rounded-xl text-red-500"
        >
          Cancelar
        </button>

        <button
          disabled={selectedItems.length === 0}
          className="flex-1 bg-emerald-500 text-white rounded-xl font-bold disabled:opacity-50"
        >
          Crear préstamo
        </button>

      </div>

    </div>
  );
}

export default CreateLoanStep2;