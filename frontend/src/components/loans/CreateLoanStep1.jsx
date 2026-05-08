function CreateLoanStep1({ onNext, onCancel, formData, setFormData }) {
  return (
    <div className="flex flex-col gap-6">

      {/* NAME + LASTNAME */}
      <div className="flex gap-5">

        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-gray-700">
            Nombre
          </label>

          <input
            value={formData?.name || ""}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Ej: Farid"
            className="border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-gray-700">
            Apellido
          </label>

          <input
            value={formData?.lastname || ""}
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
            placeholder="Ej: Villarroel"
            className="border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

      </div>

      {/* DNI */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          DNI o Carnet Universitario
        </label>

        <input
          value={formData?.dni || ""}
          onChange={(e) =>
            setFormData({ ...formData, dni: e.target.value })
          }
          placeholder="Ej: 12345678"
          className="border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 pt-2">

        <button
          onClick={onCancel}
          className="w-1/2 border border-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition"
        >
          Cancelar
        </button>

        <button
          onClick={onNext}
          className="w-1/2 bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition"
        >
          Siguiente
        </button>

      </div>

    </div>
  );
}

export default CreateLoanStep1;