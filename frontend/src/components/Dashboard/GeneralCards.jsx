import { Package, CircleCheckBig, TrendingUp, CircleAlert, Icon } from "lucide-react";

function GeneralCards() {

    const cardStyle =
        "bg-white w-70 rounded-2xl shadow-sm hover:scale-105 transition duration-300 p-4 flex flex-col";


    const mockData = [
        { name: "Total de artículos", icon: Package, number: 240, color: "text-gray-400", bg: "bg-gray-100" },
        { name: "Artículos disponibles", icon: CircleCheckBig, number: 187, color: "text-green-400", bg: "bg-green-100" },
        { name: "Articulos devueltos", icon: TrendingUp, number: 54, color: "text-blue-400", bg: "bg-blue-100" },
        { name: "Articulos no devueltos", icon: CircleAlert, number: 7, color: "text-red-400", bg: "bg-red-100" },
    ];

    return (
        <>
            <div className="flex justify-between">

                {mockData.map((item) => {
                    const IconComponent = item.icon;

                    return (
                        <>
                            <div key={item.name} className={cardStyle}>

                                {/* Title & Icon */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-gray-500">{item.name}</h3>

                                    <div className={`flex justify-center items-center w-12 h-12 rounded-lg ${item.bg}`}>
                                        <IconComponent className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                </div>

                                {/* Count */}
                                <h3 className="font-semibold text-2xl">{item.number}</h3>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default GeneralCards;