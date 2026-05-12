import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getRecentActivity } from "../../api/dashboard";

function RecentActivity() {

    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchActivity = async () => {
            try {
                const res = await getRecentActivity();

                const data = res.data || [];

                setActivities(data);

            } catch (error) {
                console.error(error);
                setActivities([]);
            } finally {
                setLoading(false);
            }
        };

        fetchActivity();
    }, []);

    if (loading) {
        return (
            <div className="bg-white w-full h-full rounded-3xl p-6 shadow-sm border border-gray-100">
                Cargando actividad...
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-white w-full h-full rounded-3xl p-6 shadow-sm gap-6 border border-gray-100">

            <div>
                <h2 className="font-semibold text-2xl text-gray-800">
                    Actividad reciente
                </h2>
                <p className="text-gray-400 text-sm">
                    Últimos movimientos del sistema
                </p>
            </div>

            <div className="flex flex-col gap-5">

                {activities.length === 0 ? (
                    <p className="text-gray-400 text-sm">Sin actividad</p>
                ) : (
                    activities.map((item, index) => {

                        const isReturn = item.type === "return";

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between border-b border-gray-100 pb-5 last:border-none"
                            >
                                <div className="flex gap-4 items-center">

                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isReturn ? "bg-green-100" : "bg-blue-100"}`}>

                                        {isReturn ? (
                                            <CheckCircle2 className="text-green-600 w-6 h-6" />
                                        ) : (
                                            <ArrowUpRight className="text-blue-600 w-6 h-6" />
                                        )}

                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {item.message}
                                        </h3>

                                        <div className="text-sm text-gray-400 mt-1">
                                            {item.user} • {item.product}
                                        </div>
                                    </div>

                                </div>

                                <p className="text-sm text-gray-400">
                                    Hace {item.time || 1} horas
                                </p>

                            </div>
                        );
                    })
                )}

            </div>

        </div>
    );
}

export default RecentActivity;