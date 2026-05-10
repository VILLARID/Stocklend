import { useEffect, useState } from "react";
import {
    ArrowLeftRight,
    CircleCheckBig,
    CircleAlert
} from "lucide-react";

import { getDashboardStats } from "../api/dashboard";

function NavbarCards() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        const fetchStats = async () => {

            try {

                const res = await getDashboardStats();

                const data = res?.data || res;

                setStats(data);

            } catch (error) {

                console.error("Navbar stats error:", error);

            }

        };

        fetchStats();

    }, []);

    const cardStyle =
        "flex rounded-xl items-center py-2 px-3 gap-3 hover:scale-105 duration-200 cursor-pointer shadow-sm";

    return (
        <div className="flex gap-4">

            {/* Active / Borrowed */}
            <div className={`${cardStyle} bg-blue-100`}>
                <ArrowLeftRight className="w-5 h-5 text-blue-500" />

                <div className="flex flex-col leading-tight">
                    <p className="text-xs text-blue-900 font-semibold">
                        Activos
                    </p>

                    <p className="text-blue-800 font-bold">
                        {stats?.borrowed_items ?? 0}
                    </p>
                </div>
            </div>

            {/* Available */}
            <div className={`${cardStyle} bg-green-100`}>
                <CircleCheckBig className="w-5 h-5 text-green-500" />

                <div className="flex flex-col leading-tight">
                    <p className="text-xs text-green-900 font-semibold">
                        Disponibles
                    </p>

                    <p className="text-green-800 font-bold">
                        {stats?.available_items ?? 0}
                    </p>
                </div>
            </div>

            {/* Not returned */}
            <div className={`${cardStyle} bg-red-100`}>
                <CircleAlert className="w-5 h-5 text-red-500" />

                <div className="flex flex-col leading-tight">
                    <p className="text-xs text-red-900 font-semibold">
                        No devueltos
                    </p>

                    <p className="text-red-800 font-bold">
                        {stats?.not_returned_items ?? 0}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default NavbarCards;