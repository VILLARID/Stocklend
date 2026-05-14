import { useState } from "react";
import { Plus } from "lucide-react";

import GeneralCards from "../components/loans/GeneralCards";
import LoansTable from "../components/loans/LoansTable";
import LoanDetailModal from "../components/loans/Modal/DetailModal/LoanDetailModal";
import CreateLoan from "../components/loans/Modal/CreateLoan";

function Loans() {

    const [selectedLoan, setSelectedLoan] = useState(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const loans = [
        {
            id: 1,
            user: "María González",
            email: "maria.g@universidad.edu",
            dni: "70735811",
            articles: 2,
            date: "2026-05-06",
            status: "Pendiente"
        },
        {
            id: 2,
            user: "Carlos Ramírez",
            email: "carlos.r@universidad.edu",
            dni: "72819455",
            articles: 1,
            date: "2026-05-05",
            status: "Devuelto"
        },
        {
            id: 3,
            user: "Ana Torres",
            email: "ana.t@universidad.edu",
            dni: "74125689",
            articles: 4,
            date: "2026-05-04",
            status: "Pendiente"
        },
        {
            id: 4,
            user: "Luis Fernández",
            email: "luis.f@universidad.edu",
            dni: "71548963",
            articles: 3,
            date: "2026-05-03",
            status: "Vencido"
        },
    ];

    return (
        <>
            <div className="flex flex-col items-start h-full gap-4 bg-[#f9fafb]">

                {/* Header */}
                <div className="flex w-full justify-between">

                    <div className="flex flex-col">
                        <h1 className="font-semibold text-3xl">
                            Inventario
                        </h1>

                        <p className="text-gray-400">
                            Gestiona los artículos de cocina
                        </p>
                    </div>

                    <div>
                        <button
                            onClick={() => setIsCreateOpen(true)}
                            className="flex items-center gap-2 bg-[#10b981] text-white rounded-2xl px-5 py-2 cursor-pointer hover:scale-105 hover:bg-[#059769] duration-150"
                        >
                            <Plus size={18} />
                            Nuevo préstamo
                        </button>
                    </div>

                </div>

                {/* Cards */}
                <div className="flex justify-between w-full">
                    <GeneralCards />
                </div>

                {/* Table */}
                <div className="w-full">
                    <LoansTable
                        loans={loans}
                        onSelectLoan={setSelectedLoan}
                    />
                </div>

                {/* Modal */}
                {selectedLoan && (
                    <LoanDetailModal
                        loan={selectedLoan}
                        onClose={() => setSelectedLoan(null)}
                    />
                )}

                <CreateLoan
                    isOpen={isCreateOpen}
                    onClose={() => setIsCreateOpen(false)}
                />
            </div>
        </>
    );
}

export default Loans;