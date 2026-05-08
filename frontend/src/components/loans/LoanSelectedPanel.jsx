function LoanSelectedPanel({ selectedItems, onRemove }) {
  return (
    <div className="w-85 flex flex-col border-l border-gray-100/60 pl-4 min-h-0 overflow-hidden">

      <div className="py-2 text-sm font-semibold text-gray-700">
        Préstamo
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-1 min-h-0">

        {selectedItems.length === 0 && (
          <p className="text-sm text-gray-400 mt-2">
            Sin artículos seleccionados
          </p>
        )}

        {selectedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-3 shadow-sm hover:shadow transition"
          >

            <p className="text-sm font-medium text-gray-800">
              {item.name}
            </p>

            <p className="text-xs text-gray-400">
              {item.category}
            </p>

            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Cant: {item.quantity}</span>

              <button
                onClick={() => onRemove(item.id)}
                className="text-red-400 hover:text-red-600 transition"
              >
                Quitar
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default LoanSelectedPanel;