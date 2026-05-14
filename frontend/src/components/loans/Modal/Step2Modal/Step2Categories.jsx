const Step2Categories = ({ categories, activeCategory, setActiveCategory }) => (
  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">

    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`h-9 px-4 rounded-xl whitespace-nowrap text-sm font-medium border transition shrink-0 ${
          activeCategory === cat
            ? "bg-emerald-500 border-emerald-500 text-white"
            : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
        }`}
      >
        {cat}
      </button>
    ))}

  </div>
);

export default Step2Categories;