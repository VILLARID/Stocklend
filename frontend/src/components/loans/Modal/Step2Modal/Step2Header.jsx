import { Package } from "lucide-react";

const Step2Header = ({ selectedCount }) => (
  <div className="flex items-center justify-between gap-5 mb-5">

    <div>
      <h2 className="text-2xl font-bold text-gray-800">Artículos</h2>
      <p className="text-sm text-gray-400 mt-1">Busca y agrega artículos al préstamo</p>
    </div>

    <div className="h-12 px-4 rounded-2xl border border-emerald-100 bg-emerald-50 flex items-center gap-3 shrink-0">

      <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
        <Package size={17} />
      </div>

      <div>
        <p className="text-[11px] text-gray-500">Seleccionados</p>
        <p className="text-sm font-semibold text-emerald-600">{selectedCount}</p>
      </div>

    </div>

  </div>
);

export default Step2Header;