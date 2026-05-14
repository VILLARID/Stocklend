import { useEffect, useState } from "react";
import { ArrowLeftRight, CircleCheckBig, Package } from "lucide-react";

function GeneralCards() {

    const [data, setData] = useState({
        active_loans: 0,
        returned_today: 0,
        available_items: 0
    });

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/loans/dashboard/cards");
                const json = await res.json();

                if (json.success) {
                    setData(json.data);
                }

            } catch (err) {
                console.error("Error loading loans cards:", err);
            }
        };

        fetchData();

    }, []);

    const cardStyle =
        "flex flex-col items-start bg-white rounded-xl px-5 py-4 w-full max-w-sm shadow-sm";

    return (
        <>
            {/* Préstamos activos */}
            <div className={cardStyle}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Préstamos activos</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-blue-200">
                        <ArrowLeftRight className="text-blue-600" />
                    </div>
                </div>

                <p className="text-3xl font-bold">
                    {data.active_loans}
                </p>
            </div>

            {/* Devueltos hoy */}
            <div className={cardStyle}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Devueltos hoy</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-green-200">
                        <CircleCheckBig className="text-green-600" />
                    </div>
                </div>

                <p className="text-3xl font-bold">
                    {data.returned_today}
                </p>
            </div>

            {/* Artículos disponibles */}
            <div className={cardStyle}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Artículos disponibles</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-gray-200">
                        <Package className="text-gray-600" />
                    </div>
                </div>

                <p className="text-3xl font-bold">
                    {data.available_items}
                </p>
            </div>
        </>
    );
}

export default GeneralCards;