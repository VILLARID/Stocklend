import { useEffect, useMemo, useState } from "react";

import {
  Search,
  Package,
  Loader2,
  ArrowLeft,
  X,
  Check
} from "lucide-react";

import ArticlesCards from "./ArticlesCards";
import LoanSelectedPanel from "./LoanSelectedPanel";

function CreateLoanStep2({
  onBack,
  onClose,
  formData
}) {

  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");

  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {

      try {

        const res = await fetch(
          "http://localhost:3000/item-types/available"
        );

        const json = await res.json();

        setItems(json.data || []);

      } catch (err) {

        console.error(err);

      } finally {

        setLoadingItems(false);

      }
    };

    fetchItems();

  }, []);

  const categories = useMemo(() => [
    "Todas",
    ...new Set(items.map(i => i.category))
  ], [items]);

  const filteredItems = items.filter(item =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase()) &&
    (
      activeCategory === "Todas" ||
      item.category === activeCategory
    )
  );

  const handleAdd = (item) => {

    if (
      selectedItems.some(i => i.id === item.id)
    ) return;

    setSelectedItems([
      ...selectedItems,
      {
        ...item,
        quantity: 1
      }
    ]);
  };

  const handleRemove = (id) => {

    setSelectedItems(
      selectedItems.filter(i => i.id !== id)
    );
  };

  const handleCreateLoan = async () => {

    try {

      setLoading(true);

      const payload = {
        name: formData.name,
        lastname: formData.lastname,
        dni: formData.dni,

        items: selectedItems.map(i => ({
          id: i.id,
          quantity: i.quantity
        }))
      };

      const res = await fetch(
        "http://localhost:3000/loans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      const json = await res.json();

      if (json.success) {

        onClose();

      }

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="h-full flex overflow-hidden">

      {/* LEFT */}
      <div className="flex-1 flex flex-col min-w-0 p-7">

        {/* TOP */}
        <div className="shrink-0 mb-6">

          <div className="flex items-center justify-between gap-5 mb-5">

            <div>

              <h2 className="text-2xl font-bold text-gray-800">
                Artículos
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Busca y agrega artículos al préstamo
              </p>

            </div>

            <div className="h-12 px-4 rounded-2xl border border-emerald-100 bg-emerald-50 flex items-center gap-3 shrink-0">

              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <Package size={17} />
              </div>

              <div>

                <p className="text-[11px] text-gray-500">
                  Seleccionados
                </p>

                <p className="text-sm font-semibold text-emerald-600">
                  {selectedItems.length}
                </p>

              </div>

            </div>

          </div>

          {/* SEARCH */}
          <div className="relative mb-4">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Buscar artículos..."
              className="
                w-full h-13 rounded-2xl
                border border-gray-200
                bg-gray-50
                pl-12 pr-4
                text-sm
                outline-none
                transition
                focus:bg-white
                focus:border-emerald-400
                focus:ring-4
                focus:ring-emerald-100
              "
            />

          </div>

          {/* CATEGORIES */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">

            {categories.map(cat => (

              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(cat)
                }
                className={`
                  h-9 px-4 rounded-xl
                  whitespace-nowrap
                  text-sm font-medium
                  border transition shrink-0
                  ${
                    activeCategory === cat
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
                  }
                `}
              >
                {cat}
              </button>

            ))}

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="
          flex-1
          overflow-y-auto
          overflow-x-hidden
          pr-2
          min-h-0
        ">

          {loadingItems ? (

            <div className="h-full flex items-center justify-center">

              <div className="flex items-center gap-3 text-gray-500">

                <Loader2
                  size={20}
                  className="animate-spin"
                />

                <p>
                  Cargando artículos...
                </p>

              </div>

            </div>

          ) : (

            <ArticlesCards
              items={filteredItems}
              onSelect={handleAdd}
            />

          )}

        </div>

        {/* FOOTER */}
        <div className="
          pt-6 mt-6 border-t border-gray-100
          flex items-center gap-4 shrink-0
        ">

          <button
            onClick={onBack}
            className="
              h-13 px-6 rounded-2xl
              border border-gray-200
              text-gray-700
              font-medium
              hover:bg-gray-50
              transition
              flex items-center gap-2
            "
          >

            <ArrowLeft size={18} />

            Atrás

          </button>

          <button
            onClick={onClose}
            className="
              h-13 px-6 rounded-2xl
              border border-red-100
              text-red-500
              font-medium
              hover:bg-red-50
              transition
              flex items-center gap-2
            "
          >

            <X size={18} />

            Cancelar

          </button>

          <button
            onClick={handleCreateLoan}
            disabled={
              !selectedItems.length ||
              loading
            }
            className="
              flex-1 h-13 rounded-2xl
              bg-emerald-500
              hover:bg-emerald-600
              text-white
              font-semibold
              shadow-lg
              shadow-emerald-200/50
              disabled:opacity-50
              transition
              flex items-center
              justify-center
              gap-2
            "
          >

            {loading ? (
              <Loader2
                size={18}
                className="animate-spin"
              />
            ) : (
              <Check size={18} />
            )}

            {loading
              ? "Creando préstamo..."
              : "Crear préstamo"}

          </button>

        </div>

      </div>

      {/* RIGHT */}
      <div className="
        w-95
        border-l border-gray-100
        bg-gray-50/70
        overflow-hidden
        flex flex-col
        min-h-0
      ">

        <div className="
          flex-1
          overflow-y-auto
          overflow-x-hidden
          min-h-0
        ">

          <LoanSelectedPanel
            selectedItems={selectedItems}
            onRemove={handleRemove}
          />

        </div>

      </div>

    </div>
  );
}

export default CreateLoanStep2;