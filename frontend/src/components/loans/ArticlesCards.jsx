// ArticlesCards.jsx

import {
  Package2,
  Plus
} from "lucide-react";

function ArticlesCards({ items, onSelect }) {

  if (!items.length) {

    return (
      <div className="h-full flex items-center justify-center">

        <div className="text-center">

          <div className="
            w-20 h-20 rounded-3xl
            bg-gray-100
            flex items-center justify-center
            mx-auto mb-5
          ">
            <Package2
              size={34}
              className="text-gray-400"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            No se encontraron artículos
          </h3>

          <p className="text-sm text-gray-400 mt-2">
            Intenta cambiar los filtros
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">

      {items.map((item) => (

        <div
          key={item.id}
          className="
            bg-white border border-gray-100
            rounded-3xl
            p-5
            flex items-center justify-between
            gap-6
            hover:border-emerald-200
            hover:shadow-md
            transition
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-5 min-w-0">

            <div className="
              w-14 h-14 rounded-2xl
              bg-emerald-50
              flex items-center justify-center
              shrink-0
            ">
              <Package2
                size={24}
                className="text-emerald-600"
              />
            </div>

            <div className="min-w-0">

              <h3 className="
                text-base font-semibold text-gray-800
                truncate
              ">
                {item.name}
              </h3>

              <div className="flex items-center gap-3 mt-2">

                <span className="
                  text-xs px-3 py-1 rounded-full
                  bg-gray-100 text-gray-600
                ">
                  {item.category}
                </span>

                <span className="
                  text-sm font-medium text-emerald-600
                ">
                  Stock: {item.stock}
                </span>

              </div>

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              onSelect?.({
                id: item.id,
                name: item.name,
                category: item.category,
                stock: item.stock,
                quantity: 1
              })
            }
            className="
              h-11 px-5 rounded-2xl
              bg-emerald-500 hover:bg-emerald-600
              text-white text-sm font-medium
              flex items-center gap-2
              transition
              shrink-0
            "
          >
            <Plus size={16} />
            Agregar
          </button>

        </div>

      ))}

    </div>
  );
}

export default ArticlesCards;