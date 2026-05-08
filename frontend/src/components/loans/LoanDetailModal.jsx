import React from 'react';
import { X, User, CreditCard, Calendar, Box } from 'lucide-react';

function LoanDetailModal({ loan, onClose }) {

    if (!loan) return null;

    const articles = [
        { name: 'Batidora KitchenAid', cat: 'Electrodomésticos' },
        { name: 'Licuadora Vitamix', cat: 'Electrodomésticos' }
    ];

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-[#10b981] px-8 py-7 flex justify-between items-start">

                    <div className="flex items-center gap-4">

                        <div className="bg-white/15 p-3 rounded-2xl">
                            <User className="text-white w-6 h-6" />
                        </div>

                        <div className="flex flex-col">

                            <h2 className="text-2xl font-semibold text-white tracking-tight">
                                {loan.user}
                            </h2>

                            <p className="text-white/80 text-sm mt-1">
                                {loan.email}
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white/10 p-2 rounded-xl transition-colors duration-200"
                    >
                        <X className="w-5 h-5" />
                    </button>

                </div>

                {/* Body */}
                <div className="p-8 space-y-7">

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-5">

                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <CreditCard className="w-4 h-4" />

                                <span className="text-[11px] font-medium uppercase tracking-[0.15em]">
                                    DNI / Carnet
                                </span>
                            </div>

                            <p className="text-gray-800 text-lg font-medium">
                                {loan.dni}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <Calendar className="w-4 h-4" />

                                <span className="text-[11px] font-medium uppercase tracking-[0.15em]">
                                    Fecha préstamo
                                </span>
                            </div>

                            <p className="text-gray-800 text-lg font-medium">
                                {loan.date}
                            </p>
                        </div>

                    </div>

                    {/* Articles */}
                    <div>

                        <h3 className="text-gray-800 text-lg font-semibold mb-4">
                            Artículos prestados ({loan.articles})
                        </h3>

                        <div className="space-y-3">

                            {articles.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100/70 transition-colors"
                                >

                                    <div className="flex items-center gap-4">

                                        <div className="bg-blue-100 p-3 rounded-xl">
                                            <Box className="w-5 h-5 text-blue-600" />
                                        </div>

                                        <div>

                                            <p className="font-medium text-gray-800">
                                                {item.name}
                                            </p>

                                            <p className="text-sm text-gray-500 mt-0.5">
                                                {item.cat}
                                            </p>

                                        </div>

                                    </div>

                                    <button className="bg-[#10b981] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#0da371] transition-colors">
                                        Devolver
                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="px-8 pb-8">

                    <button className="w-full bg-[#10b981] text-white py-4 rounded-2xl text-base font-medium hover:bg-[#0da371] transition-all shadow-sm">
                        Devolver todo
                    </button>

                </div>

            </div>

        </div>
    );
}

export default LoanDetailModal;