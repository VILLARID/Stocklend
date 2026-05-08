import GeneralCards from "../components/Dashboard/GeneralCards";
import RecentActivity from "../components/Dashboard/RecentActivity";

function Dashboard() {
    return (
        <div className="flex flex-col h-full gap-4 bg-[#f9fafb]">

            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-3xl">Panel de Control</h1>
                <p className="text-gray-400">Resumen general del sistema</p>
            </div>

            {/* Cards */}
            <GeneralCards />

            {/* Activity */}
            <div className="flex-1">
                <RecentActivity />
            </div>

        </div>
    );
}

export default Dashboard;