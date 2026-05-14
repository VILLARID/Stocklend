import { ArrowLeft, X, Check, Loader2 } from "lucide-react";

const Step2Footer = ({
  onBack,
  onClose,
  onCreate,
  loading,
  disabled
}) => (
  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-4 shrink-0">

    <button
      onClick={onBack}
      className="h-13 px-6 rounded-2xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition flex items-center gap-2"
    >
      <ArrowLeft size={18} />
      Atrás
    </button>

    <button
      onClick={onClose}
      className="h-13 px-6 rounded-2xl border border-red-100 text-red-500 font-medium hover:bg-red-50 transition flex items-center gap-2"
    >
      <X size={18} />
      Cancelar
    </button>

    <button
      onClick={onCreate}
      disabled={disabled || loading}
      className="flex-1 h-13 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-200/50 disabled:opacity-50 transition flex items-center justify-center gap-2"
    >
      {loading ? <Loader2 size={18} className="animate-spin" /> : <Check size={18} />}
      {loading ? "Creando préstamo..." : "Crear préstamo"}
    </button>

  </div>
);

export default Step2Footer;