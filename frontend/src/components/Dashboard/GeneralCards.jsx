import { useEffect, useState } from "react";
import { Package, CircleCheckBig, TrendingUp, CircleAlert } from "lucide-react";
import { getDashboardStats } from "../../api/dashboard";

function GeneralCards() {

    const [stats, setStats] = useState({
        total_items: 0,
        available_items: 0,
        borrowed_items: 0,
        not_returned_items: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await getDashboardStats();

                setStats(res.data || {
                    total_items: 0,
                    available_items: 0,
                    borrowed_items: 0,
                    not_returned_items: 0
                });

            } catch (error) {
                console.error(error);
            }
        };

        fetchStats();
    }, []);

    const cardStyle =
        "bg-white flex-1 rounded-3xl shadow-sm px-5 py-5 flex flex-col border border-gray-100 hover:scale-102 hover:shadow-lg duration-200";

    const mockData = [
        {
            name: "Total de artículos",
            icon: Package,
            number: stats.total_items,
            color: "text-gray-500",
            bg: "bg-gray-100"
        },
        {
            name: "Artículos disponibles",
            icon: CircleCheckBig,
            number: stats.available_items,
            color: "text-green-500",
            bg: "bg-green-100"
        },
        {
            name: "Artículos en préstamo",
            icon: TrendingUp,
            number: stats.borrowed_items,
            color: "text-blue-500",
            bg: "bg-blue-100"
        },
        {
            name: "Artículos no devueltos",
            icon: CircleAlert,
            number: stats.not_returned_items,
            color: "text-red-500",
            bg: "bg-red-100"
        },
    ];

    return (
        <div className="flex gap-4">
            {mockData.map((item) => {
                const Icon = item.icon;

                return (
                    <div key={item.name} className={cardStyle}>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-gray-400">{item.name}</p>
                                <h2 className="text-3xl font-semibold text-gray-800 mt-2">
                                    {item.number}
                                </h2>
                            </div>

                            <div className={`p-3 rounded-xl ${item.bg}`}>
                                <Icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default GeneralCards;