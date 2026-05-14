import { useEffect, useMemo, useState } from "react";

import Step2Header from "./Step2Modal/Step2Header";
import Step2Search from "./Step2Modal/Step2Search";
import Step2Categories from "./Step2Modal/Step2Categories";
import Step2Footer from "./Step2Modal/Step2Footer";
import Step2RightPanel from "./Step2Modal/Step2RightPanel";

import ArticlesCards from "./Step2Modal/Step2Articles";

function CreateLoanStep2({ onBack, onClose, formData }) {

  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");

  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {

      try {

        const res = await fetch("http://localhost:3000/item-types/available");
        const json = await res.json();

        setItems(json?.data || []);

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
    ...new Set((items || []).map(i => i.category))
  ], [items]);

  const filteredItems = useMemo(() => {

    return (items || []).filter(item =>
      item?.name?.toLowerCase().includes(search.toLowerCase()) &&
      (activeCategory === "Todas" || item?.category === activeCategory)
    );

  }, [items, search, activeCategory]);

  const handleAdd = (item) => {

    setSelectedItems(prev => {

      if (prev.some(i => i.id === item.id)) return prev;

      return [...prev, { ...item, quantity: 1 }];

    });

  };

  const handleRemove = (id) => {

    setSelectedItems(prev =>
      prev.filter(i => i.id !== id)
    );

  };

  const handleCreateLoan = async () => {

    try {

      setLoading(true);

      const payload = {
        name: formData?.name,
        lastname: formData?.lastname,
        dni: formData?.dni,
        items: selectedItems.map(i => ({
          id: i.id,
          quantity: i.quantity
        }))
      };

      const res = await fetch("http://localhost:3000/loans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const json = await res.json();

      if (json?.success) onClose();

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

        <Step2Header selectedCount={selectedItems.length} />

        <Step2Search search={search} setSearch={setSearch} />

        <Step2Categories
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 min-h-0">

          <ArticlesCards
            items={filteredItems}
            onSelect={handleAdd}
          />

        </div>

        <Step2Footer
          onBack={onBack}
          onClose={onClose}
          onCreate={handleCreateLoan}
          loading={loading}
          disabled={!selectedItems.length}
        />

      </div>

      {/* RIGHT */}
      <Step2RightPanel
        selectedItems={selectedItems}
        onRemove={handleRemove}
      />

    </div>

  );

}

export default CreateLoanStep2;