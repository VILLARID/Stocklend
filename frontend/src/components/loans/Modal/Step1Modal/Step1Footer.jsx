import { X, ArrowRight } from "lucide-react";

function Step1Footer({ onCancel, handleNext }) {
    return (
        <div className="h-24 shrink-0 bg-white border-t border-gray-100 px-8 flex items-center justify-between">

            <p className="text-sm text-gray-400">
                Todos los campos son obligatorios
            </p>

            <div className="flex items-center gap-4">

                <button
                    onClick={onCancel}
                    className="h-12 px-6 rounded-2xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition flex items-center gap-2"
                >
                    <X size={16} />
                    Cancelar
                </button>

                <button
                    onClick={handleNext}
                    className="h-12 px-7 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition flex items-center gap-2 shadow-lg shadow-emerald-200/50"
                >
                    Continuar
                    <ArrowRight size={16} />
                </button>

            </div>

        </div>
    );
}

export default Step1Footer;