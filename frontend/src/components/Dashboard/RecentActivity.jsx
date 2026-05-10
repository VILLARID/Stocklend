import { ArrowUpRight, CheckCircle2 } from "lucide-react";

function RecentActivity() {

    const mockData = [
        { name: "Préstamo realizado", user: "Maria Gonzales", product: "Batidora KitchenAid", time: 2 },
        { name: "Devolución realizada", user: "Carlos Ruiz", product: "Juego de cuchillos Wüsthof", time: 4 },
        { name: "Préstamo realizado", user: "Ana Martínez", product: "Licuadora Vitamix", time: 5 },
        { name: "Devolución realizada", user: "David López", product: "Olla de presión Instant Pot", time: 24 },
        { name: "Préstamo realizado", user: "Laura Fernández", product: "Procesador de alimentos", time: 26 }
    ];

    return (
        <div className="flex flex-col bg-white w-full h-full rounded-xl p-4 shadow-sm gap-5">

            {/* Header */}
            <div className="flex flex-col gap-2">

                <h2 className="font-semibold text-xl">
                    Actividad reciente
                </h2>

                <p className="text-gray-400 text-sm">
                    Últimos movimientos del sistema
                </p>

            </div>

            {/* LIST */}
            <div className="flex flex-col gap-8">

                {mockData.map((item, index) => {

                    const isReturn = item.name
                        .toLowerCase()
                        .includes("devolución");

                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between"
                        >

                            {/* Left */}
                            <div className="flex gap-3 items-center">

                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center
                                    ${isReturn
                                            ? "bg-green-100"
                                            : "bg-blue-100"
                                        }`}
                                >

                                    {isReturn ? (

                                        <CheckCircle2 className="text-green-600 w-6 h-6" />

                                    ) : (

                                        <ArrowUpRight className="text-blue-600 w-6 h-6" />

                                    )}

                                </div>

                                <div className="flex flex-col">

                                    <h3 className="font-medium text-gray-800">
                                        {item.name}
                                    </h3>

                                    <div className="flex text-gray-400 text-sm gap-2">

                                        <span>{item.user}</span>

                                        <span>-</span>

                                        <span>{item.product}</span>

                                    </div>

                                </div>

                            </div>

                            {/* Right */}
                            <p className="text-gray-400 text-sm whitespace-nowrap">
                                Hace {item.time} horas
                            </p>

                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default RecentActivity;