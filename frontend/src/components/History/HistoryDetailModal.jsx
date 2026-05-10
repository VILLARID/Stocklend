import React from 'react';
import {
    X,
    CreditCard,
    Calendar,
    Box,
    CheckCircle2
} from 'lucide-react';

function HistoryDetailModal({ loan, onClose }) {

    if (!loan) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">

            <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-4xl shadow-2xl overflow-hidden flex flex-col">

                {/* Header */}
                <div className="bg-[#10b981] px-8 py-6 flex justify-between items-center shrink-0">

                    <div className="flex items-center gap-4">

                        <div className="bg-white/20 p-2.5 rounded-full">

                            <CheckCircle2 className="text-white w-6 h-6" />

                        </div>

                        <div>

                            <h2 className="text-xl font-bold text-white">
                                {loan.user}
                            </h2>

                            <p className="text-white/90 text-sm">
                                {loan.email}
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                </div>

                {/* Body */}
                <div className="p-8 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-[#f8fafc] p-5 rounded-xl border border-gray-100">

                            <div className="flex items-center gap-2 text-gray-400 mb-1">

                                <CreditCard className="w-4 h-4" />

                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    DNI / CARNET
                                </span>

                            </div>

                            <p className="text-gray-700 text-lg font-bold">
                                {loan.dni}
                            </p>

                        </div>

                        <div className="bg-[#f8fafc] p-5 rounded-xl border border-gray-100">

                            <div className="flex items-center gap-2 text-gray-400 mb-1">

                                <Calendar className="w-4 h-4" />

                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    FECHA PRÉSTAMO
                                </span>

                            </div>

                            <p className="text-gray-700 text-lg font-bold">
                                {loan.loanDate}
                            </p>

                        </div>

                    </div>

                    {/* Status */}
                    <div className="bg-[#ecfdf5] border border-[#d1fae5] rounded-xl p-5 flex items-start gap-4">

                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 shrink-0" />

                        <div>

                            <p className="text-[#065f46] font-bold text-base">
                                Préstamo completado
                            </p>

                            <p className="text-[#065f46] text-sm opacity-90">

                                Todos los artículos fueron devueltos el{" "}

                                <span className="font-bold">
                                    {loan.returnDate}
                                </span>

                            </p>

                        </div>

                    </div>

                    {/* Articles */}
                    <div>

                        <h3 className="text-gray-800 text-lg font-bold mb-4">

                            Artículos prestados ({loan.articles.length})

                        </h3>

                        <div className="space-y-3">

                            {loan.articles.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl border border-gray-100"
                                >

                                    <div className="flex items-center gap-4">

                                        <div className="bg-[#dcfce7] p-3 rounded-xl shrink-0">

                                            <Box className="w-6 h-6 text-[#10b981]" />

                                        </div>

                                        <div>

                                            <p className="font-bold text-gray-800">
                                                {item.name}
                                            </p>

                                            <p className="text-sm text-gray-400">
                                                {item.cat}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-2 text-[#10b981] font-medium shrink-0">

                                        <CheckCircle2 className="w-4 h-4" />

                                        <span className="text-sm">
                                            {item.status}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Footer Info */}
                    <div className="bg-[#f8fafc] p-4 rounded-xl">

                        <p className="text-gray-500 text-sm">

                            <span className="font-bold">
                                Duración del préstamo:
                            </span>{" "}

                            Del {loan.loanDate} al {loan.returnDate}

                        </p>

                    </div>

                </div>

                {/* Footer */}
                <div className="px-8 pb-8 pt-4 bg-white shrink-0">

                    <button
                        onClick={onClose}
                        className="w-full py-4 border-2 border-gray-100 text-gray-600 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all"
                    >
                        Cerrar
                    </button>

                </div>

            </div>

        </div>
    );
}

export default HistoryDetailModal;