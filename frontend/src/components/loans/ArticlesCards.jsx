function ArticlesCards({ items, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">

      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
        >

          <div>
            <p className="text-sm font-medium text-gray-800">
              {item.name}
            </p>

            <p className="text-xs text-gray-400">
              {item.category}
            </p>

            <p className="text-xs text-emerald-600 mt-1">
              Stock: {item.stock}
            </p>
          </div>

          <button
            onClick={() => onSelect?.(item)}
            className="mt-3 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm transition"
          >
            Agregar
          </button>

        </div>
      ))}

    </div>
  );
}

export default ArticlesCards;