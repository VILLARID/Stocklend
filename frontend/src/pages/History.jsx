import GeneralCards from "../components/History/GeneralCards";
import HistoryTable from "../components/History/HistoryTable";

function History() {
    return (
        <div className="flex flex-col h-full gap-4 bg-[#f9fafb]">

            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-3xl">Historial</h1>
                <p className="text-gray-400">Revisa todos los préstamos completados y estadísticas históricas</p>
            </div>

            {/* Cards */}
            <div className="flex justify-between">
                <GeneralCards />
            </div>

            {/* Table */}
            <div>
                <HistoryTable />
            </div>
        </div>
    );
}

export default History;