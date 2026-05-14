import {
    X,
    CreditCard,
    Calendar,
    CheckCircle2,
    Clock3
} from "lucide-react";

import ArticlesModal from "./ArticlesModal";

function HistoryDetailModal({ loan, onClose }) {

    if (!loan) return null;

    return (

        <div className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/50 backdrop-blur-sm
            px-4 py-6
        ">

            <div className="
                w-full max-w-3xl
                max-h-[92vh]
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
                border border-gray-100
                animate-in fade-in zoom-in duration-200
                flex flex-col
            ">

                {/* Header */}
                <div className="
                    px-8 py-6
                    bg-gradient-to-r from-emerald-500 to-emerald-400
                    relative
                ">

                    <button
                        onClick={onClose}
                        className="
                            absolute top-5 right-5
                            p-2 rounded-xl
                            bg-white/10 hover:bg-white/20
                            text-white transition
                        "
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-4">

                        <div className="
                            w-14 h-14 rounded-2xl
                            bg-white/20
                            flex items-center justify-center
                            shadow-inner
                        ">

                            <CheckCircle2 className="w-7 h-7 text-white" />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-white">
                                {loan.user}
                            </h2>

                            <p className="text-sm text-emerald-50 mt-1">
                                {loan.email}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">

                    <div className="p-8 space-y-6">

                        {/* Cards */}
                        <div className="grid md:grid-cols-2 gap-4">

                            {/* DNI */}
                            <div className="
                                rounded-2xl border border-gray-100
                                bg-gray-50 p-5
                            ">

                                <div className="flex items-center gap-2 text-gray-400 mb-2">

                                    <CreditCard className="w-4 h-4" />

                                    <span className="text-xs font-semibold tracking-wide uppercase">
                                        DNI / Carnet
                                    </span>

                                </div>

                                <p className="text-lg font-bold text-gray-800">
                                    {loan.dni}
                                </p>

                            </div>

                            {/* Fecha */}
                            <div className="
                                rounded-2xl border border-gray-100
                                bg-gray-50 p-5
                            ">

                                <div className="flex items-center gap-2 text-gray-400 mb-2">

                                    <Calendar className="w-4 h-4" />

                                    <span className="text-xs font-semibold tracking-wide uppercase">
                                        Fecha préstamo
                                    </span>

                                </div>

                                <p className="text-lg font-bold text-gray-800">
                                    {loan.loanDate}
                                </p>

                            </div>

                        </div>

                        {/* Status */}
                        <div className="
                            rounded-2xl
                            border border-emerald-100
                            bg-emerald-50
                            p-5
                            flex items-start gap-4
                        ">

                            <div className="
                                w-11 h-11 rounded-xl
                                bg-emerald-100
                                flex items-center justify-center
                                shrink-0
                            ">

                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />

                            </div>

                            <div>

                                <p className="font-semibold text-emerald-800">
                                    Préstamo completado
                                </p>

                                <p className="text-sm text-emerald-700 mt-1 leading-relaxed">

                                    Todos los artículos fueron devueltos el{" "}

                                    <span className="font-semibold">
                                        {loan.returnDate}
                                    </span>

                                </p>

                            </div>

                        </div>

                        {/* Articles */}
                        <div className="
                            border border-gray-100
                            rounded-3xl
                            overflow-hidden
                            bg-white
                        ">

                            <div className="
                                px-6 py-4
                                border-b border-gray-100
                                bg-gray-50
                            ">

                                <h3 className="text-lg font-semibold text-gray-800">
                                    Artículos prestados
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Lista de artículos asociados al préstamo
                                </p>

                            </div>

                            <ArticlesModal loan={loan} />

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="
                    border-t border-gray-100
                    px-8 py-5
                    bg-gray-50
                    flex items-center justify-between
                    gap-4
                ">

                    <div className="flex items-center gap-2 text-gray-500 text-sm">

                        <Clock3 className="w-4 h-4" />

                        <span>
                            Del {loan.loanDate} al {loan.returnDate}
                        </span>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            px-6 py-2.5
                            rounded-xl
                            bg-emerald-500
                            hover:bg-emerald-600
                            text-white
                            text-sm font-medium
                            transition
                            shadow-sm
                        "
                    >
                        Cerrar
                    </button>

                </div>

            </div>

        </div>

    );
}

export default HistoryDetailModal;