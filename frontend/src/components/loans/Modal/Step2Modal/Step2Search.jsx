import { Search } from "lucide-react";

const Step2Search = ({ search, setSearch }) => (
  <div className="relative mb-4">

    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar artículos..."
      className="w-full h-13 rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-sm outline-none transition focus:bg-white focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
    />

  </div>
);

export default Step2Search;